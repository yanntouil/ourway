import { createContext, useContext, useLayoutEffect, useRef, useState } from 'react'
import config from '../config'


/**
 * Create context
 */
const TranslationContext = createContext()

/**
 * Context provider
 */
export default function LayoutContextProvider({ children }) {
    /**
     * States
     */
    const initialTranslations = {}
    config.translation.languages.forEach(lang => initialTranslations[lang] = {}) 
    const [translations, _setTranslations] = useState(initialTranslations)
    const translationsRef = useRef(initialTranslations)
    const setTranslations = (translation) => {
        translationsRef.current = translation
        _setTranslations(translation)
    }
    
    const [currentLanguage, _setCurrentLanguage] = useState(config.translation.defaultLanguage)
    const setCurrentLanguage = (lang) => {// update state if lang is available
        if (config.translation.languages.includes(lang)) {
            _setCurrentLanguage(lang)
            localStorage.setItem("language", lang)
        }
    }
    
    useLayoutEffect(() => {
        setCurrentLanguage(localStorage.getItem("language"))
    }, [])

    /**
     * Add a JSON translation
     * @param {object} translationJSON Translation object or JSON
     * @param {string} context Add a context
     */
    const addTranslation = (translationJSON, context) => {
        const newTranslation = {...translationsRef.current}
        config.translation.languages.forEach((lang) => {
            if (!newTranslation[lang]) newTranslation[lang] = {}
            if (translationJSON[lang]) {
                const translation = {}
                if (context) translation[context] = translationJSON[lang]// push in context
                else translation = translationJSON[lang]// or root
                newTranslation[lang] = {...newTranslation[lang], ...translation}
            }
        })
        setTranslations(newTranslation)
    }

    /**
     * Find a translation
     * @param {string} context - Sentence or doted keys
     * @param {boolean} notFoundError - Generate an error
     * @param {string} language - Language use to search
     * @returns {string}
     */
    const findTranslation = (context, notFoundError = config.translation.notFoundError, language = currentLanguage) => {
        const translation = translations[language]
        if (typeof translation === 'object') {
            // Context to string (1 level)
            if (context in translation && typeof translation[context] === 'string') {
                return translation[context]
            }
            // Context doted (n level)
            const keys = context.split('.')
            for (const key of keys) {
                if (typeof translation === 'object' && key in translation) {
                    translation = translation[key]
                } else {
                    if (language !== config.translation.fallbackLanguage) {// Try from fallback
                        return findTranslation(context, notFoundError, config.translation.fallbackLanguage)
                    }
                    if (!notFoundError) return context// Must not generate error
                    else throw `[OW] Translation "${context}" not found on key "${key}"`
                }
            }
            if (typeof translation === 'string') return translation
            else if (!notFoundError) return context// Must not generate error
            else throw `[OW] Translation "${context}" bring not a string`
        }
        throw `[OW] Translation is not an object`
    }

    /**
     * Pluralization
     * @param {string} translation
     * @param {number} count
     * @returns {string}
     */
    const pluralize = (translation, count) => {
        let parts = translation.split('|')
        let translationString = false
        const pattern = /^(\[(\s*\d+\s*)+,(\s*(\d+|\*)\s*)])|({\s*\d+\s*})/
        for (let i in parts) {
            let matched = parts[i].match(pattern)
            if (matched === null) {// No range in translation
                if (i == (parts.length - 1)) parts[i] = `[${i},*] ${parts[i]}`// Last one [n,*]
                else parts[i] = `{${i}} ${parts[i]}`// Others {n}
                matched = [parts[i]]
            }
            const replaced = matched[0].replace(/[{}\[\]]/g, '')// Remove {} and []
            const range = replaced.split(',').map((m) => {
                const parsed = Number.parseInt(m.trim())
                return Number.isInteger(parsed) ? parsed : count + 1// Case [n,*]
            })
            parts[i] = parts[i].replace(pattern, '')// Remove range to the string
            if (range.length == 1 && range[0] == count)// Case {n}
                translationString = parts[i]
            else if (range.length == 2 && range[0] <= count && range[1] >= count)// Case [nx,ny]
                translationString = parts[i]
        }
        return (translationString === false) ? parts[parts.length - 1] : translationString// Case not found -> return last
    }

    /**
     * Translate a sentence from the context
     * @param {string} context - Sentence or doted keys
     * @param {object} options - Placeholders to replace in translation use 'count' for pluralization
     * @param {boolean} notFoundError - Generate an error
     * @param {string} language - Language use to search
     * @returns {string}
     */
    const trans = (context, options = {}, notFoundError = config.translation.notFoundError, language =  currentLanguage) => {
        if (!context) return ''
        let translation = findTranslation(context, notFoundError, language)
        if (typeof options.count === 'number') {
            translation = pluralize(translation, options.count)
        }
        Object.entries(options).forEach((placeholder) => {// Replace variables
            translation = translation.replace(new RegExp(':' + placeholder[0], 'g'), placeholder[1])
        })
        return translation
    }

    /**
     * Shortcut of 'trans' without error generation
     * @param {string} context - Sentence or doted keys
     * @param {object} options - Placeholders to replace in translation use 'count' for pluralization
     * @returns {string}
     */
    const __ = (context, options = {}) => trans(context, options, false)

    /**
     * Wrapper
     */
    return (
        <TranslationContext.Provider value={{ setCurrentLanguage, addTranslation, __, trans }}>
            {children}
        </TranslationContext.Provider>
    )  
}

/**
 * Hook useContext
 */
export function useTranslationContext() {
    return useContext(TranslationContext)
}


