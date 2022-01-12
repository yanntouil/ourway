import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import config from 'app/config'
import { disableBodyScroll, enableBodyScroll, clearScrollLocks, className } from 'app/helpers'
import { useTranslation } from 'app/hooks'
import { layoutSelector } from 'app/reducers'
// Images
import flagEnImg from 'assets/images/flags/flag-en.png'
import flagFrImg from 'assets/images/flags/flag-fr.png'
// Icons
import AngleDownIcon from 'assets/images/icons/light/angle-down.svg'
import TimesIcon from 'assets/images/icons/light/times.svg'
import twitterIcon from 'assets/images/logos/twitter-animated.gif'

/**
 * Global params
 */
const motionTiming = 0.5

/**
 * Display main menu
 */
export default function Menu() {
    /**
     * Hooks
     */
    const {showMenu} = useSelector(layoutSelector)

    /**
     * Animations
     */
    const motionModal = {
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        variants: {
            animate: {
                transition: { delayChildren: motionTiming }
            }
        },
        transition: { duration: motionTiming },
    }

    useEffect(() => {
        if (showMenu) disableBodyScroll()
        else enableBodyScroll()
        return () => {
            clearScrollLocks()
        }
    }, [showMenu])

    /**
     * Render
     */
    return (
        <AnimatePresence exitBeforeEnter>
            {showMenu && (
            <>
                <MenuOverlay />
                <nav className="fixed inset-0 z-50 transition-colors duration-300 ease-in-out" aria-label="Main">
                    <motion.div 
                        className="flex justify-center items-center w-full h-full"
                        {...motionModal}
                    >
                        <MenuClose />
                        <MenuDarkMode />
                        <MenuSocialNetwork />
                        <MenuLanguages />
                        <MenuLinks />
                    </motion.div>
                </nav>
            </>
            )}
        </AnimatePresence>
    )
}

/**
 * Display social network buttons in menu
 */
export function MenuSocialNetwork() {
    /**
     * Hooks
     */
    const __ = useTranslation('layout')
    
    /**
     * Animations
     */
    const motionList = {
        variants: {
            animate: { transition: { staggerChildren: .2} },
        }
    }
    const motionButton = {
        variants: {
            initial: {opacity: 0, y: 100},
            animate: {opacity: 1, y: 0},
            exit: {opacity: 0, y: 100},
        },
        transition: { type: "spring", stiffness: 200 },
    }
    
    /**
     * Render
     */
    return (
        <motion.ul className="absolute bottom-4 lg:bottom-8 left-4 sm:left-8 lg:left-16 flex gap-4" {...motionList}>

            <motion.li {...motionButton}>
                <a 
                    href={config.author.linkedin}  
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="
                        group flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full
                        border-2 border-secondary-800 dark:border-secondary-200 outline-none
                        hover:bg-secondary-800 dark:hover:bg-secondary-200 focus:bg-secondary-800 dark:focus:bg-secondary-200
                        text-secondary-800 dark:text-secondary-200
                        transition-all duration-700 ease-in-out 
                        hover:transform hover:scale-125 focus:transform focus:scale-125
                    "
                >
                    <svg className="fill-current w-6 h-6 sm:w-8 sm:h-8 group-hover:text-[#0a66c2] group-focus:text-[#0a66c2] transition-colors duration-500 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                    <span className="sr-only">{__('social-network.linkedin')}</span>
                </a>
            </motion.li>

            <motion.li {...motionButton}>
                <a 
                    href={config.author.slack} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="
                        group flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full
                        border-2 border-secondary-800 dark:border-secondary-200 outline-none
                        hover:bg-secondary-800 dark:hover:bg-secondary-200 focus:bg-secondary-800 dark:focus:bg-secondary-200
                        text-secondary-800 dark:text-secondary-200
                        transition-all duration-700 ease-in-out 
                        hover:transform hover:scale-125 focus:transform focus:scale-125
                    "
                >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current group-hover:text-[#36c5f0] group-focus:text-[#36c5f0] transition-colors duration-500 delay-100 ease-in-out" /*fill="#36c5f0"*/ d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" />
                        <path className="fill-current group-hover:text-[#2eb67d] group-focus:text-[#2eb67d] transition-colors duration-500 delay-300 ease-in-out" /*fill="#2eb67d"*/ d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" />
                        <path className="fill-current group-hover:text-[#ecb22e] group-focus:text-[#ecb22e] transition-colors duration-500 delay-500 ease-in-out" /*fill="#ecb22e"*/ d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" />
                        <path className="fill-current group-hover:text-[#e01e5a] group-focus:text-[#e01e5a] transition-colors duration-500 delay-700 ease-in-out" /*fill="#e01e5a"*/ d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" />
                    </svg>
                    <span className="sr-only">{__('social-network.slack')}</span>
                </a>
            </motion.li>

            <motion.li {...motionButton}>
                <a 
                    href={config.author.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="
                        group flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full
                        border-2 border-secondary-800 dark:border-secondary-200 outline-none 
                        hover:bg-secondary-800 dark:hover:bg-secondary-200 focus:bg-secondary-800 dark:focus:bg-secondary-200
                        text-secondary-800 dark:text-secondary-200
                        transition-all duration-700 ease-in-out
                        hover:transform hover:scale-125 focus:transform focus:scale-125
                    "
                >
                    <svg className="fill-current w-6 h-6 sm:w-8 sm:h-8 group-hover:text-white dark:group-hover:text-[#161B22] group-focus:text-white dark:group-focus:text-[#161B22] transition-colors duration-500 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
                    <span className="sr-only">{__('social-network.github')}</span>
                </a>
            </motion.li>

            <motion.li {...motionButton}>
                <a 
                    href={config.author.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="
                        group relative flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full
                        border-2 border-secondary-800 dark:border-secondary-200 outline-none 
                        hover:bg-secondary-800 dark:hover:bg-secondary-200 focus:bg-secondary-800 dark:focus:bg-secondary-200
                        text-secondary-800 dark:text-secondary-200
                        transition-all duration-700 ease-in-out 
                        hover:transform hover:scale-125 focus:transform focus:scale-125
                    "
                >   
                    <span 
                        className="absolute w-12 h-12 m-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100" 
                        aria-hidden="true"
                    >
                        <Image 
                            src={twitterIcon} 
                            width={48} 
                            height={48} 
                            alt={__('social-network.twitter')} 
                        />
                    </span>
                    <svg className="fill-current w-6 h-6 sm:w-8 sm:h-8 group-hover:opacity-0 group-hover:text-[#1A8CD8] group-focus:text-[#1A8CD8] transition-colors duration-500 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    <span className="sr-only">{__('social-network.twitter')}</span>
                </a>
            </motion.li>

        </motion.ul>
    )
}

/**
 * Display button to close Menu
 */
export function MenuClose() {
    /**
     * Hooks
     */
    const dispatch = useDispatch()
    const __ = useTranslation('layout')

    /**
     * Render
     */
    return (
        <motion.button 
            type="button" 
            className="
                group absolute top-0 sm:top-4 right-0 sm:right-4 lg:right-12
                flex justify-center items-center w-16 h-16 rounded-full
                text-secondary-800 dark:text-secondary-100
                focus:outline-2 focus:outline-secondary-500/5 dark:focus:outline-2 dark:focus:outline-white/5
                transition-color duration-300 ease-in-out
            "
            variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0, transition: { duration: 0.2 }},
            }}
            transition={{
                delay: 0,
                type: "spring",
                stiffness: 200 
            }}
            onClick={() => dispatch({type: 'layout/setShowMenu', payload: false})}
        >
            <TimesIcon 
                className="
                    w-12 h-12 fill-current 
                    transition-all duration-500 ease-in-out 
                    group-hover:transform group-hover:rotate-90 group-focus:transform group-focus:rotate-90
                " 
                aria-hidden="true" 
            />
            <span className="sr-only">{__('layout.close-menu')}</span>
        </motion.button>
    )
}

/**
 * Display button to toggle darkmode
 */
export function MenuDarkMode() {
    /**
     * Hooks
     */
    const dispatch = useDispatch()
    const { darkMode } = useSelector(layoutSelector)
    const __ = useTranslation('layout')

    /**
     * Animations
     */
    const motionButton = {
        variants: {
            initial: {opacity: 0, scale: .5},
            animate: {opacity: 1, scale: 1},
            exit: {opacity: 0, scale: .5},
        },
        transition: { type: "spring", stiffness: 200 },
    }

    /**
     * Render
     */
    return (
        <motion.button 
            type="type" 
            className="
                absolute top-0 sm:top-4 left-2 sm:left-4 lg:left-12
                flex justify-center items-center w-16 h-16 rounded-full
                focus:outline-2 focus:outline-secondary-500/5 dark:focus:outline-2 dark:focus:outline-white/5
            "
            {...motionButton}
            onClick={() => dispatch({type: 'layout/setDarkMode', payload: !darkMode})}
        >   
            <span 
                className={className([
                    'toggle-mode',
                    darkMode ? 'dark-mode' : 'light-mode'
                ])}
                aria-hidden="true"
            ></span>
            <span className="sr-only">{darkMode ? __('switch-lightmode') : __('switch-darkmode')}</span>
        </motion.button>
    )
}

/**
 * Display button to change language
 */
export function MenuLanguages() {
    /**
     * Hooks
     */
    const dispatch = useDispatch()
    const __ = useTranslation('layout')
    const langs = config.langs

    /**
     * Change language
     */
    const changeLanguage = (lang) => dispatch({type: 'translation/setCurrentLanguage', payload: lang})

    /**
     * Animations
     */
    const motionList = {
        variants: {
            animate: { transition: { staggerChildren: motionTiming} },
        }
    }
    const motionButton = {
        variants: {
            initial: {opacity: 0, y: 100},
            animate: {opacity: 1, y: 0},
            exit: {opacity: 0, y: 100},
        },
        transition: { type: "spring", stiffness: 200 },
    }

    /**
     * Render
     */    
    return (
        <motion.ul className="absolute bottom-4 lg:bottom-8 right-4 sm:right-8 lg:right-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-8" {...motionList}>
            {langs.map((language) => (
                <motion.li key={`header-menu-${language.local}`} {...motionButton}>
                    <button 
                        type="button" 
                        className="
                            flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full select-none
                            focus:outline-2 focus:outline-secondary-500/5 dark:focus:outline-2 dark:focus:outline-white/5
                            transition-all duration-500 ease-in-out
                            hover:transform hover:scale-125 focus:transform focus:scale-125
                        "
                        onClick={() => changeLanguage(language.local)}
                    >
                        <Image 
                            src={language.local === 'en' ? flagEnImg : flagFrImg}
                            alt={__('layout.'+language.name)}
                            width="56" 
                            height="56" 
                            aria-hidden="true" 
                            draggable="false"
                            className="rounded-full"
                        />
                        <span className="sr-only">{__('switch-language', {language: __(language.name)})}</span>
                    </button>
                </motion.li>
            ))}
        </motion.ul>
    )

}

/**
 * Diplay menu overlay
 */
export function MenuOverlay() {
    /**
     * Animations
     */
    const motionOverlay = {
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        variants: {
            initial: {opacity: 0},
            animate: {opacity: 1},
            exit: {opacity: 0},
        },
        transition: { duration: motionTiming },
    }
    
    /**
     * Render
     */
    return (
        <motion.div 
            className="fixed inset-0 z-40 bg-white dark:bg-secondary-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm"
            {...motionOverlay}
        ></motion.div>
    )
}

/**
 * Display links in menu
 */
export function MenuLinks() {
    /**
     * Hooks
     */
    const router = useRouter()
    const dispatch = useDispatch()
    const {showMenu} = useSelector(layoutSelector)
    const __ = useTranslation('menu')
    const [ submenuOpen, setSubmenuOpen ] = useState(0)
    const menuLinksRef = useRef([])// Contain first level links
    const menuLiRef = useRef([])// Contain first level li
    const menuRef = useRef(null)// Contain menu
    const menu = config.menu

    /**
     * Link is active
     * @param {{pathname: string}} link
     * @returns {boolean}
     */
    const linkIsActive = (link) => router.pathname == link.pathname

    /**
     * Child link is active
     * @param {{pathname: string, children: true|null}} link
     * @returns {boolean}
     */
    const childLinkIsActive = (link) => {
        if (!link.children) return false
        const partOfRoute = router.pathname.split('/')
        const partOfLink = link.pathname.split('/')
        let isIn = true
        partOfLink.forEach((part, index) => {// Check if each part of link is in current path
            isIn = isIn && part === partOfRoute[index]
        })
        return isIn
    }
 
    /**
     * Open submenu
     * @param {number} index
     */
    const toggleSubmenu = (index) => setSubmenuOpen(index === submenuOpen ? 0 : index)
 
     /**
      * Close menu
      */
    const closeMenu = () => dispatch({type: 'layout/setShowMenu', payload: false})

    /**
     * Manage keybord interaction when menu is open
     * @param {SyntheticBaseEvent} e
     */
    const menuManageKeyboard = (e) => {
        if (!['ArrowDown', 'ArrowUp', 'Home', 'End', 'Escape'].includes(e.key)) return
        if (e.key === 'Escape') return closeMenu()
        e.preventDefault()
        const activeLink = document.activeElement
        const links = menuLinksRef.current
        let index = menuLiRef.current.findIndex((link) => link.contains(activeLink))
        if (index === -1) index = 0
        else if (e.key === 'ArrowDown' && ++index === links.length) index = 0// ArrowDown => Go to next or first if is last
        else if (e.key === 'ArrowUp' && --index < 0) index = links.length -1// ArrowUp => Go to previous or last if is first
        else if (e.key === 'Home') index = 0// Home => Go to first
        else if (e.key === 'End') index = links.length -1// End => Go to last
        links[index].focus()
        setSubmenuOpen(index)
    }

    /**
     * Backdrop click handler
     * @param {SyntheticBaseEvent} e
     */
    const clickBackdrop = useCallback((e) => {
        if (menuRef && !menuRef.current.contains(e.target)) setSubmenuOpen(0)
    }, [])

    /**
     * Watcher on showMenu
     */
    useEffect(() => {
        if (showMenu) {// Add listener on menu opened
            window.addEventListener('keydown', menuManageKeyboard)
            window.addEventListener('mousedown', clickBackdrop)
        } else {// Remove listener on menu closed
            window.removeEventListener('keydown', menuManageKeyboard)
            window.removeEventListener('mousedown', clickBackdrop)
        }
        return () => {
            window.removeEventListener('keydown', menuManageKeyboard)
            window.removeEventListener('mousedown', clickBackdrop)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showMenu])

    /**
     * Animations
     */
    const motionLinks = {
        variants: {
            initial: {opacity: 0, scale: .5},
            animate: {opacity: 1, scale: 1 },
            exit: {opacity: 0, scale: .5},
        },
    }
    const motionSubmenu = {
        initial: 'collapsed',
        animate: 'open',
        exit: 'collapsed',
        variants: {
            collapsed: { opacity: 0, height: 0 },
            open: { opacity: 1, height: 'auto' },
        },
        transition: { type: 'tween', duration: 0.5 }
    }

    /**
     * Render
     */
    return (
        <motion.ul 
            className="flex flex-col justify-center items-strech gap-2 w-full max-w-[24rem] select-none"
            ref={menuRef}
            {...motionLinks}
        >
            {menu.map((link, index) => (
                <li 
                    key={`MenuLinks-${index}`} 
                    className={className([
                        'border border-transparent ',
                        (linkIsActive(link) || childLinkIsActive(link)) ? 
                            'hover:border-primary-600 dark:hover:border-primary-400 focus-within:border-primary-600 dark:focus-within:border-primary-400' :
                            'hover:border-secondary-800 dark:hover:border-white focus-within:border-secondary-800 dark:focus-within:border-white',
                    ])}
                    ref={el => menuLiRef.current[index] = el}
                >
                    <div className={className([
                        'flex justify-center p-4 gap-4 text-xl uppercase transition-colors duration-300 ease-in-out',
                        (linkIsActive(link) || childLinkIsActive(link)) ? 
                            'text-primary-600 dark:text-primary-400' :
                            'text-secondary-800 dark:text-white'
                    ])}>
                        <Link href={link.pathname}>
                            <a 
                                ref={el => menuLinksRef.current[index] = el} 
                                className="outline-none" 
                                onClick={closeMenu}
                                onFocus={() => setSubmenuOpen(index)}
                            >
                                {__(link.name)}
                            </a>
                        </Link>
                        {link.children && (
                            <button 
                                className={className([
                                    'flex justify-center items-center w-8 h-8 -mr-12 transition-transform',
                                    {'transform rotate-180': index === submenuOpen}
                                ])}
                                aria-hidden="true"
                                tabIndex={-1}
                                onClick={() => toggleSubmenu(index)}
                            >
                                <AngleDownIcon className="w-6 h-6 fill-current" />
                            </button>
                        )}
                    </div>
                    {link.children && (
                        <AnimatePresence>
                            {index === submenuOpen && (
                                <motion.div 
                                    className="overflow-hidden" 
                                    key={`MenuLinksSubmenu-${index}`} 
                                    {...motionSubmenu}
                                >
                                    <ul className="flex flex-wrap gap-x-4 gap-y-0 p-4 justify-evenly">
                                        {link.children.map((linkChild, iindex) => (
                                            <li 
                                                key={`MenuLinks-${index}-${iindex}`} 
                                                className={className([
                                                    '',
                                                    (linkIsActive(linkChild)) ? 
                                                        'text-primary-600 dark:text-primary-400' :
                                                        'text-secondary-800 dark:text-white'
                                                ])}
                                            >
                                                <Link href={linkChild.pathname}>
                                                    <a 
                                                        className="group flex flex-col items-center outline-none" 
                                                        onClick={closeMenu}
                                                    >
                                                        {__(linkChild.name)}
                                                        <span // Underline hover animation
                                                            aria-hidden="true" 
                                                            className={className([
                                                                'block h-1 w-0 border-b group-hover:w-full group-focus:w-full transition-all duration-500',
                                                                (linkIsActive(linkChild)) ? 
                                                                    'border-primary-600 dark:border-primary-400' :
                                                                    'border-secondary-800 dark:border-white'
                                                            ])}
                                                        ></span>
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </li>
            ))}
        </motion.ul>
    )
}

