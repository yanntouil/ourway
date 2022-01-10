import React from 'react'
import { className } from 'app/helpers'

/**
 * Display Blog heading
 */
export default function BlogHeading(props) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <div {...cleanProps} className={className([
            props.className ?? '',
            'relative mb-16 pt-16 sm:pt-24',
        ])} />
    )
}

/**
 * Display Blog heading body
 */
export function BlogHeadingBody (props) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <div {...cleanProps} className={className([
            props.className ?? '',
            'relative flex flex-col py-16 max-w-5xl mx-auto px-4 sm:px-8 lg:px-16',
        ])} />
    )
}

/**
 * Display Blog heading title
 */
export function BlogHeadingTitle (props) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <h2 {...cleanProps} className={className([
            props.className ?? '',
            'text-4xl md:text-6xl lg:text-8xl font-black tracking-wide uppercase text-center text-stroke text-white/75',
        ])} />
    )
}

/**
 * Display Blog heading secondary title
 */
export function BlogHeadingSecondary (props) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    if (props.dark) delete(cleanProps.dark)
    return (
        <h3 {...cleanProps} className={className([
            props.className ?? '',
            'pb-2 text-xl md:text-2xl lg:text-3xl font-title font-semibold text-center',
            props.dark ? 'text-white' : 'text-black',
        ])} />
    )
}

/**
 * Display Blog heading content
 */
export function BlogHeadingContent (props) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    if (props.dark) delete(cleanProps.dark)
    return (
        <h2 {...cleanProps} className={className([
            props.className ?? '',
            'md:text-lg lg:text-xl text-center font-medium',
            props.dark ? 'text-white' : 'text-black',
        ])} />
    )
}