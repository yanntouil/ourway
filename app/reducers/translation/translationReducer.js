import config from "app/config"
import * as translations from "translations"



/**
 * @const initialState
 */
const initialState = {
    currentLanguage: config.translation.defaultLanguage,
    currentLocale: config.translation.locale[config.translation.defaultLanguage],
}

/**
 * Layout reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function translationReducer(state = initialState, action) {

    if (!('translations' in state)) {// First init
        // Set translations
        state.translations = {}
        const translationsKeys = Object.keys(translations)
        config.translation.languages.forEach(lang => {
            state.translations[lang] = {}// Init lang as an object
            translationsKeys.forEach((key) => {// Set all translations
                state.translations[lang][key] = translations[key][lang]
            })
        })
        // Set current language
        if(typeof window !== 'undefined') {
            if (localStorage.getItem('language') === null)
                localStorage.setItem('language', config.translation.defaultLanguage)
            state.currentLanguage = window.localStorage.getItem('language')
            document.documentElement.setAttribute('lang', state.currentLanguage)
        }
        return {...state}
    }

    switch(action.type) {
        // setCurrentLanguage
        case 'translation/setCurrentLanguage': {
            const lang = action.payload
            const currentLanguage = config.translation.languages.includes(lang) ? lang : config.translation.defaultLanguage
            const currentLocale = config.translation.locale[currentLanguage]
            localStorage.setItem('language', currentLanguage)
            document.documentElement.setAttribute('lang', currentLanguage)
            return {...state, currentLanguage, currentLocale }
        }
        // Default
        default: {
            return {...state}
        }
    }




}