import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'app/hooks'
import { className } from 'app/helpers'
import config from 'app/config'

// Images
import Link from 'next/link'
import Logo from 'components/ui/Logo'
import PhoneIcon from 'assets/images/icons/light/phone.svg'
import AdresseIcon from 'assets/images/icons/light/map-signs.svg'
import EmailIcon from 'assets/images/icons/light/envelope.svg'
import CircleIcon from 'assets/images/icons/solid/circle.svg'
import AuthorImage from 'assets/images/author.jpg'
import twitterIcon from 'assets/images/logos/twitter-animated.gif'


/**
 * Footer
 */
export default function Footer() {
    return (
        <footer className="px-4 sm:px-8 lg:px-16 pt-8 pb-4 bg-secondary-800 dark:bg-secondary-900 text-white">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-0 xl:gap-4 pb-6">
                <FooterAuthor />
                <FooterSocialNetwork />
            </div>
            <FooterBottomLink />
        </footer>
    )
}

/**
 * Display social network buttons in footer
 */
 export function FooterSocialNetwork() {
    const __ = useTranslation('layout')
    return (
        <section className="flex justify-end items-center">
            <div className="relative sm:w-96 lg:w-[18rem] xl:w-96  sm:h-48 p-4 gap-4" /*style={{clipPath: 'circle(16rem at 2rem -6rem)'}}*/>
                <h3 className="sm:absolute sm:top-4 sm:right-24 text-2xl pb-4 text-center font-gochi-hand">{__('footer.find-me')}</h3>
                <ul className="flex justify-center gap-4">
                    <li /* LinkedIn */ className="sm:absolute sm:top-0 sm:right-0">
                        <a href={config.author.linkedin} target="_blank" rel="noopener noreferrer" className={className([
                            'group flex justify-center items-center w-16 h-16 rounded-full',
                            'border-2 border-white outline-none',
                            'bg-secondary-800 hover:bg-white focus:bg-white',
                            'text-white hover:text-[#2867B2] focus:text-[#2867B2]',
                            'transition-all duration-500 ease-in-out',
                            'hover:transform hover:scale-125 focus:transform focus:scale-125',
                        ])}>
                            <svg className="w-8 h-8 fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                            <span className="sr-only">{__('social-network.linkedin')}</span>
                        </a>
                    </li>
                    <li /* Slack */ className="sm:absolute sm:top-[4rem] sm:right-[3rem]">
                        <a href={config.author.slack} target="_blank" rel="noopener noreferrer" className={className([
                            'group inline-flex justify-center items-center w-16 h-16 rounded-full',
                            'border-2 border-white outline-none',
                            'bg-secondary-800 hover:bg-white focus:bg-white',
                            'transition-all duration-500 ease-in-out ',
                            'hover:transform hover:scale-125 focus:transform focus:scale-125',
                        ])}>
                            <svg className="w-8 h-8" aria-hidden="true" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-current group-hover:text-[#36c5f0] group-focus:text-[#36c5f0] transition-colors duration-500 delay-100 ease-in-out" /*fill="#36c5f0"*/ d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" />
                                <path className="fill-current group-hover:text-[#2eb67d] group-focus:text-[#2eb67d] transition-colors duration-500 delay-300 ease-in-out" /*fill="#2eb67d"*/ d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" />
                                <path className="fill-current group-hover:text-[#ecb22e] group-focus:text-[#ecb22e] transition-colors duration-500 delay-500 ease-in-out" /*fill="#ecb22e"*/ d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" />
                                <path className="fill-current group-hover:text-[#e01e5a] group-focus:text-[#e01e5a] transition-colors duration-500 delay-700 ease-in-out" /*fill="#e01e5a"*/ d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" />
                            </svg>
                            <span className="sr-only">{__('social-network.slack')}</span>
                        </a>
                    </li>
                    <li /* GitHub */ className="sm:absolute sm:top-[6.5rem] sm:right-[7.5rem]">
                        <a href={config.author.github} target="_blank" rel="noopener noreferrer" className={className([
                            'group inline-flex justify-center items-center w-16 h-16 rounded-full',
                            'border-2 border-white outline-none',
                            'text-white hover:text-[#161B22] focus:text-[#161B22]',
                            'bg-secondary-800 hover:bg-white focus:bg-white',
                            'transition-all duration-500 ease-in-out',
                            'hover:transform hover:scale-125 focus:transform focus:scale-125',
                        ])}>
                            <svg className="fill-current w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
                            <span className="sr-only">{__('social-network.github')}</span>
                        </a>
                    </li>
                    <li /* Twitter */ className="sm:absolute sm:top-[6.8rem] sm:right-[12.8rem]">
                        <a href={config.author.twitter} target="_blank" rel="noopener noreferrer" className={className([
                            'group relative inline-flex justify-center items-center w-16 h-16 rounded-full',
                            'border-2 border-white outline-none',
                            'text-white hover:text-[#1A8CD8] focus:text-[#1A8CD8]',
                            'bg-secondary-800 hover:bg-white focus:bg-white',
                            'transition-all duration-500 ease-in-out',
                            'hover:transform hover:scale-125 focus:transform focus:scale-125',
                        ])}>
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
                            <svg className="fill-current w-8 h-8 group-hover:opacity-0 group-focus:opacity-0 transition-all duration-500 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                            <span className="sr-only">{__('social-network.twitter')}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

/**
 * Display author information in footer
 */
 export function FooterAuthor() {
    const __ = useTranslation('layout')
    const [displayPhone, setDisplayPhone] = useState(false)
    const [displayEmail, setDisplayEmail] = useState(false)
    return (
        <section className="flex flex-col items-center sm:items-start sm:flex-row gap-8">
            <div className="relative w-64 h-64 shrink-0 rounded-full bg-secondary-200">
                <Image src={AuthorImage} layout="fill" objectFit="cover" priority={true} className="rounded-full" alt={config.author.fullname} />
            </div>
            <div className="flex">
                <div className="flex flex-col gap-2">
                    <h2 className="sm:relative sm:-left-4"><Logo className="h-16 fill-current" ariaLabel="Ourway" /></h2>
                    <h3 className="flex items-center gap-4 text-2xl sm:-mr-2 md:mr-0 font-semibold">{config.author.firstname} {config.author.lastname}<span className="text-base font-normal italic">{__('footer.job')}</span></h3>
                    <ul>
                        <li className="flex items-center">
                            <AdresseIcon className="w-6 h-6 my-2 mx-4 shrink-0 fill-current" aria-hidden="true" />
                            <a href={config.author.addressLink} target="_blank" rel="noopener noreferrer"className="block m-2 transition-colors duration-700 hover:text-primary-500 focus:text-primary-500" >
                                {config.author.address1}<br/>{config.author.address2} {config.author.address3}
                            </a>
                        </li>
                        <li className="sm:relative sm:-left-4 flex items-center">
                            <PhoneIcon className="w-6 h-6 my-2 mx-4 shrink-0 fill-current" aria-hidden="true" />
                            {displayPhone ? (
                                <a href={`tel:${config.author.phone}`} className="flex items-center h-6 m-2 transition-colors duration-700 hover:text-primary-500 focus:text-primary-500">
                                    {config.author.phone}
                                </a>
                            ) : (
                                <button type="button" className="flex items-center h-6 m-2 transition-colors duration-700 hover:text-primary-500 focus:text-primary-500" onClick={() => setDisplayPhone(true)}>
                                    {__('footer.display-phone')}
                                </button>
                            )}
                        </li>
                        <li className="sm:relative sm:-left-8 flex items-center">
                            <EmailIcon className="w-6 h-6 my-2 mx-4 shrink-0 fill-current" aria-hidden="true" />
                            {displayEmail ? (
                                <a href={`mailto:${config.author.email}`} className="flex items-center h-6 m-2 transition-colors duration-700 hover:text-primary-500 focus:text-primary-500">
                                    {config.author.email}
                                </a>
                            ) : (
                                <button type="button" className="flex items-center h-6 m-2 transition-colors duration-700 hover:text-primary-500 focus:text-primary-500" onClick={() => setDisplayEmail(true)}>
                                    {__('footer.display-email')}
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

/**
 * Display legal menu in footer
 */
export function FooterBottomLink() {
    const __ = useTranslation('layout')
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:items-center pt-2  lg:gap-4 text-lg xl:text-xl font-gochi-hand">
            <h3>{__('footer.made')}</h3>
            <ul className="flex flex-wrap justify-center gap-x-4">
                <li className="flex items-center gap-4">
                    <CircleIcon className="hidden lg:inline-block w-2 h-2 -mt-0.5 mb-0.5 fill-current" />
                    <Link href="/terms">
                        <a className="group flex flex-col items-center hover:text-primary-500 transition-all duration-700">
                            {__('footer.terms')}
                            <span className="block w-0 border-b-2 border-b-primary-500 group-hover:w-full transition-all duration-500"></span>
                        </a>
                    </Link>
                </li>
                <li className="flex items-center gap-4">
                    <CircleIcon className="hidden lg:inline-block w-2 h-2 -mt-0.5 mb-0.5 fill-current" />
                    <Link href="/privacy-policy">
                        <a className="group flex flex-col items-center hover:text-primary-500 transition-all duration-700">
                            {__('footer.privacy')}
                            <span className="block w-0 border-b-2 border-b-primary-500 group-hover:w-full transition-all duration-500"></span>
                        </a>
                    </Link>
                </li>
                <li className="flex items-center gap-4">
                    <CircleIcon className="hidden lg:inline-block w-2 h-2 -mt-0.5 mb-0.5 fill-current" />
                    <Link href="/manage-cookies">
                        <a className="group flex flex-col items-center hover:text-primary-500 transition-all duration-700">
                            {__('footer.cookies')}
                            <span className="block w-0 border-b-2 border-b-primary-500 group-hover:w-full transition-all duration-500"></span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
