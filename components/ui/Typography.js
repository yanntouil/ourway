import React from 'react'
import { className } from 'app/helpers'

/**
 * Blockquote
 */
export function Blockquote(props) {
    const cleanProps = props
    if (props.className) delete(cleanProps.className)
    return (
        <blockquote className={className([
            props.className ?? '',
            'pl-4 border-l-4 border-l-secondary-400 dark:border-l-secondary-700 text-secondary-700 dark:text-secondary-300'
        ])} {...cleanProps} />
    )
}
