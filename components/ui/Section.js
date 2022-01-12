import React from "react"
import { className } from "app/helpers"





/**
 * Display a section
 * @param {Object} props
 */
function Section( props, ref ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    if (props.noPadding) delete(cleanProps.noPadding)
    return (
        <section {...cleanProps} ref={ref} className={className([
            'w-full min-h-screen',
            props.noPadding ? '' : 'pt-16 sm:pt-24',
            props.className ?? '',
        ])} />
    )
}
export default React.forwardRef(Section)

/**
 * Display section title
 * @param {Object} props
 */
export function SectionTitle( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    if (props.heading) delete(cleanProps.heading)
    const heading = props.heading ?? 2
    return heading === 1 ? (
        <h1 {...cleanProps} className={className([
            'text-3xl font-semibold pb-4 mb-4 border-b border-secondary-500',
            props.className ?? '',
        ])} />
    ) : heading === 2 ? (
        <h2 {...cleanProps} className={className([
            'text-3xl font-semibold pb-4 mb-4 border-b border-secondary-500',
            props.className ?? '',
        ])} />
    ) : (<></>)
}

/**
 * Display section secondary title
 * @param {Object} props
 */
export function SectionSecondary( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <p {...cleanProps} className={className([
            'text-2xl',
            props.className ?? '',
        ])} />
    )
}
