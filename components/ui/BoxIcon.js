import React from 'react';
import { className } from 'app/helpers';



/**
 * Display a box with icon and text
 * @param {Object} props
 */
export default function BoxIcon(props) {
    const cleanProps = { ...props };
    if (props.className)
        delete (cleanProps.className);
    return (
        <article {...cleanProps} className={className([
            'flex flex-col items-center',
            props.className ?? '',
        ])} />
    );
}
/**
 * BoxIcon title wrapper
 * @param {Object} props
 */
export function BoxIconTitle( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <h3 {...cleanProps} className={className([
            'py-4 text-3xl font-semibold text-center',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxIcon content wrapper
 * @param {Object} props
 */
 export function BoxIconContent ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <p {...cleanProps} className={className([
            'text-lg text-center',
            props.className ?? '',
        ])} />
    )
}

