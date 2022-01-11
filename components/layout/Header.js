import React, {  } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { layoutSelector } from 'app/reducers/layout/layoutSelectors'
import { className } from 'app/helpers'
import { useResponsive, useTranslation } from 'app/hooks'
import config from 'app/config'
import Logo from 'components/ui/Logo'
import Menu from 'components/layout/Menu'
// Icons
import BurgerEnIcon from 'assets/images/flags/burger-flag-en.svg'
import BurgerFrIcon from 'assets/images/flags/burger-flag-fr.svg'
import { translationSelector } from 'app/reducers'

/**
 * Display header
 * Todo : Intégrer les sous menu
 *        Verifier la taille des texts sur le responsive
 */
export default function Header() {
    /**
     * Hooks
     */
    const dispatch = useDispatch()
    const router = useRouter()
    const __ = useTranslation()
    const { logoSheme, pageTitle } = useSelector(layoutSelector)
    const { currentLanguage } = useSelector(translationSelector)
    const media = useResponsive()
    const menu = config.menu
    
    /**
     * Open menu
     */
    const openMenu = () => dispatch({type: 'layout/setShowMenu', payload: true})

    /**
     * Link is active
     * @param {{pathname: string}} link
     * @returns {boolean}
     */
    const linkIsActive = (link) => router.pathname === link.pathname

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
     * Links animations
     */
    const linksVariants = {
        initial: {opacity: 0, x: 100},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0},
    }
            
    /**
     * Render
     */
    return (
        <header className="fixed top-0 inset-x-0 z-10" id="header">
            <div className="flex justify-between pl-4 sm:pl-8 lg:pl-16 pr-2 sm:pr-4 lg:pr-12 h-16 sm:h-24 bg-white/75 dark:bg-secondary-800/75 backdrop-blur-sm">
                <div className="flex justify-between w-full">
                <Link href="/">
                    <a className="flex mt-2 -mb-2 py-2 sm:py-4">
                        <Logo 
                            className={className([
                                'h-12 sm:h-16 outline-none fill-current',
                                {'text-secondary-800 dark:text-white': logoSheme === 'dark'},
                                {'text-white dark:text-secondary-800': logoSheme === 'light'},
                                {'text-primary-500 dark:primary-500': logoSheme === 'primary'}
                            ])} 
                            ariaLabel={__('layout.logo-label')} 
                        />
                        <h1 className="sr-only">{pageTitle}</h1>
                    </a>
                </Link>
                <nav className="" aria-label="Menu">
                    <ul className="flex items-center p-2 sm:p-4 gap-4">
                        {media.min('lg') && menu.map((link, index) => (
                            <li key={`Header-${index}`}>
                                <Link href={link.pathname} /*scroll={false}*/>
                                    <a className={className([
                                        'block p-4 outline-none text-lg leading-none font-semibold focus:underline transition-colors duration-300 ease-in-out',
                                        linkIsActive(link) || childLinkIsActive(link) ? 
                                            'text-primary-600 dark:text-primary-400' : 
                                            'text-secondary-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400',
                                    ])}>
                                        {__('menu.' + link.name)}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button
                                type="button" 
                                className="flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full outline-none text-secondary-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400     transition-colors duration-300 ease-in-out"
                                onClick={openMenu}
                            >   
                                {currentLanguage === 'en' && (<BurgerEnIcon className="fill-current w-8 h-8" aria-hidden="true" />)}
                                {currentLanguage === 'fr' && (<BurgerFrIcon className="fill-current w-8 h-8" aria-hidden="true" />)}
                                <span className="sr-only">{__('layout.open-menu')}</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
            <Menu/>
        </header>
    )
}



