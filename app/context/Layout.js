import { createContext, useContext, useLayoutEffect, useState } from 'react'
import config from '../config'
import { ucFirst } from '../helpers'
import { useRouteChange } from '../hooks'

/**
 * Create context
 */
const LayoutContext = createContext()


/**
 * Context provider
 */
export default function LayoutContextProvider({ children }) {
    /**
     * States
     */
    const [showMenu, setShowMenu] = useState(false)//+
    const [menuLink, _setMenuLinks] = useState(config.menu)
    const [darkMode, _setDarkMode] = useState(false)//+
    const [logoColor, _setLogoColor] = useState('dark')
    const [pageTitle, _setPageTitle] = useState(config.page.title)

    /**
     * Intercept MenuLink update
     * @param {boolean} value
     */
     const setMenuLinks = (name) => {
        _setMenuLinks(name ? config[`menu${ucFirst(name)}`] : config.menu)
    }

    /**
     * Intercept page title update
     * @param {boolean} value
     */
     const setPageTitle = (title) => {
        _setPageTitle(title ? `${config.page.title} - ${ucFirst(title)}` : config.page.title)
    }

    /**
     * Intercept logo color update
     * @param {boolean} value
     */
     const setLogoColor = (scheme) => {
        _setLogoColor(scheme ?? 'dark')
    }

    /**
     * Intercept DarkMode update to add body class and backup in local storage
     * @param {boolean} value
     */
    const setDarkMode = (value = !darkMode) => {// Interceptor
        const bodyClass = document.querySelector("body").classList
        if (value) bodyClass.add('dark')
        else bodyClass.remove('dark')
        _setDarkMode(value)
        localStorage.setItem("darkMode", value)
    }

    /**
     * Init darkMode from local storage
     */
    useLayoutEffect(() => {
        if (localStorage.getItem("darkMode") === null) localStorage.setItem("darkMode", 'false')
        else if (localStorage.getItem("darkMode") === 'true') setDarkMode(true)
    }, [])

    /**
     * Wrapper
     */
    return (
        <LayoutContext.Provider value={{darkMode, setDarkMode, showMenu, setShowMenu, menuLink, setMenuLinks, logoColor, setLogoColor, pageTitle, setPageTitle}}>
            {children}
        </LayoutContext.Provider>
    )   
}

/**
 * Hook useContext
 */
export function useLayoutContext() {
    return useContext(LayoutContext);
}