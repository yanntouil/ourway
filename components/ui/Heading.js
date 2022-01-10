import React from 'react'
import { className as addClass } from 'app/helpers'


/**
 * Display heading
 */
export default function Heading({ className = {}, children }) {
    return (
        <section className={addClass([
            'flex flex-col select-none',
            className,
        ])}>
            {children}
        </section>
    )
}

/**
 * Display heading title
 */
export function HeadingTitle({ className = '', children }) {
    return (
        <h1 className={addClass([
            '-mr-2 mb-2 text-8xl xl:text-8xl font-black text-stroke-2 text-stroke-secondary-800 dark:text-stroke-white text-white/50 dark:text-secondary-800/50 uppercase tracking-normal leading-none',
            className,
        ])}>
            {children}
        </h1>
    )
}

/**
 * Display heading secondary title
 */
export function HeadingSecondary({ className = '', children }) {
    return (
        <h2 className={addClass([
            'mb-4 text-3xl font-bold tracking-normal leading-none text-secondary-700 dark:text-secondary-200',
            className,
        ])}>
            {children}
        </h2>
    )
}

/**
 * Display heading highlight
 */
export function HeadingHighlight({ className = '', children }) {
    return (
        <p className={addClass([
            'mb-4 text-xl font-semibold tracking-normal leading-tight text-secondary-800 dark:text-secondary-100',
            className,
        ])}>
            {children}
        </p>
    )
}

/**
 * Display heading content
 */
export function HeadingContent({ className = '', children }) {
    return (
        <p className={addClass([
            'leading-normal text-secondary-800 dark:text-white',
            className,
        ])}>
            {children}
        </p>
    )
}