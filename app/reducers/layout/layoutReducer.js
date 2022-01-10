import config from "app/config"
import { ucFirst } from "app/helpers"
import { translate } from "app/hooks/useTranslation"
import store from "app/reducers/store"



/**
 * @const initialState
 */
const initialState = {
    showMenu: false,
    pageTitle: config.page.title,
    menuLinks: config.menu,
    menuLinksName: '',
    logoSheme: 'dark',
}

/**
 * Layout reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function layoutReducer(state = initialState, action) {
    if (!('darkMode' in state)) {// Init darkMode
        if (typeof window !== "undefined") {
            if(localStorage.getItem("darkMode") === null) localStorage.setItem("darkMode", 'false')
            state.darkMode = localStorage.getItem('darkMode') === 'true'
            if (state.darkMode) document.querySelector("body").classList.add('dark')
        }
    }
    switch(action.type) {
        // setDarkMode
        case 'layout/setDarkMode': {
            const darkMode = action.payload
            const bodyClass = document.querySelector("body").classList
            if (darkMode) bodyClass.add('dark')
            else bodyClass.remove('dark')
            localStorage.setItem("darkMode", darkMode)
            return {...state, darkMode }
        }
        // setShowMenu
        case 'layout/setShowMenu': {
            const showMenu = action.payload
            return {...state, showMenu }
        }
        // setPageTitle
        case 'layout/setPageTitle': {
            const title = action.payload
            const pageTitle = title ? `${config.page.title} - ${ucFirst(title)}` : initialState.pageTitle
            return {...state, pageTitle }
        }
        // setMenuLinks
        case 'layout/setMenuLinks': {
            const menuLinksName = action.payload
            const menuLinks = menuLinksName ? config[`menu${ucFirst(menuLinksName)}`] : initialState.menuLinks
            return {...state, menuLinks, menuLinksName }
        }
        // setLogoSheme
        case 'layout/setLogoSheme': {
            const scheme = action.payload
            const logoSheme= scheme ?? initialState.logoSheme
            return {...state, logoSheme }
        }
        // Default
        default: {
            return state
        }
    }
}