import { className } from "app/helpers"
import Markdown from 'components/ui/Markdown'



/**
 * Display a tiny text card
 * @param {Object} props
 */
 export default function BoxCard ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <article {...cleanProps} className={className([
            'flex flex-col pt-8 bg-white dark:bg-secondary-900 shadow-lg border dark:border-secondary-800 rounded-lg',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxCard title wrapper
 * @param {Object} props
 */
 export function BoxCardTitle ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <h4 {...cleanProps} className={className([
            'mb-2 px-8 text-2xl font-semibold text-secondary-600 dark:text-white',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxCard content wrapper
 * @param {Object} props
 */
 export function BoxCardContent ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <Markdown {...cleanProps} className={className([
            'grow px-8 mb-6',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxCard bottom color
 * @param {Object} props
 */
 export function BoxCardBorder ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <div {...cleanProps} aria-hidden="true" className={className([
            'rounded-b-lg h-2',
            props.className ?? '',
        ])} />
    )
}
