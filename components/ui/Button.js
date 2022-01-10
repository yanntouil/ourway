import React from 'react'
import { className } from 'app/helpers'

export function Button(props) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    if (props.color) delete(cleanProps.color)
    if (!props.type) cleanProps.type = 'button'
    const color = props.color ?? 'primary'
    return (
        <button className={className([
            props.className ?? '',
            'px-4 py-2 rounded border text-white text-center outline-none focus:ring-2 ',
            'transition-colors duration-500',
            `bg-${color}-600 hover:bg-${color}-700 border-${color}-600 focus:border-${color}-600 focus:ring-${color}-500`,
        ])} {...cleanProps} />
    )
}
