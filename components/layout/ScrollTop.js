import { useTranslation } from 'app/hooks'
import React from 'react'

import ArrowUpIcon from 'assets/images/icons/solid/arrow-up.svg'

/**
 * Display scroll top button
 */
export default function ScrollTop() {
    const __ = useTranslation('layout')
    return (
        <button 
            className="fixed z-40 bottom-16 right-16 flex justify-center items-center w-12 h-12 rounded-full bg-primary-500/75 text-white"
            onClick={() => window.scrollTo(0, 0)}
        >
            <ArrowUpIcon className="w-4 h-4 fill-current" />
            <span className="sr-only">{__('scroll-top')}</span>
        </button>
    )
}
