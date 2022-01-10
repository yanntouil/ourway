import { useSelector } from 'react-redux'
import config from 'app/config'
import { translationSelector } from 'app/reducers/translation/translationSelectors'


/**
 * useTranslation
 * @param {string|null} parentContext 
 */
export default function useTranslation(parentContext) {
    const { translations, currentLanguage } = useSelector(translationSelector)

    if (parentContext) {
        return (context, options = {}) => translate([parentContext, context].join('.'), translations, options, false, currentLanguage)
    } else {
        return (context, options = {}) => translate(context, translations, options, false, currentLanguage)
    }
}

/**
 * Find a translation
 * @param {string} context - Sentence or doted keys
 * @param {object} translations - Contain all translations
 * @param {boolean} notFoundError - Generate an error
 * @param {string} language - Language use to search
 * @returns {string}
 */
const findTranslation = (context, translations, notFoundError = config.translation.notFoundError, language) => {
    let translation = {...translations[language]}
    if (typeof translation === 'object') {
        // Context to string (1 level)
        if (context in translation && typeof translation[context] === 'string') {
            return translation[context]
        }
        // Context doted (n level)
        const keys = context.split('.')
        for (const key of keys) {
            if (typeof translation === 'object' && key in translation) {// Reduce translations
                translation = translation[key]
            } else {
                if (language !== config.translation.fallbackLanguage) {// Try from fallback
                    return findTranslation(context, translations, notFoundError, config.translation.fallbackLanguage)
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
 * @param {object} translations - Contain all translations
 * @param {object} options - Placeholders to replace in translation use 'count' for pluralization
 * @param {boolean} notFoundError - Generate an error
 * @param {string} language - Language use to search
 * @returns {string}
 */
export const translate = (context, translations, options = {}, notFoundError = config.translation.notFoundError, language =  currentLanguage) => {
    if (!context) return ''
    let translation = findTranslation(context, translations, notFoundError, language)
    if (typeof options.count === 'number') {
        translation = pluralize(translation, options.count)
    }
    Object.entries(options).forEach((placeholder) => {// Replace variables
        translation = translation.replace(new RegExp(':' + placeholder[0], 'g'), placeholder[1])
    })
    return translation
}









