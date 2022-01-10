import { className } from 'app/helpers';
import React, { createContext, useContext } from 'react'
import Card from './Card';





/**
 * Context
 */
export const Card3DContext = createContext();

/**
 * Display a 3D card
 * @param {{isTurned: Boolean, className: String}} props
 */
export default function Card3D({ isTurned, className, children }) {
    return (
        <article className={`card-3d group select-none transition-transform duration-500 hover:transform hover:scale-105 ${isTurned ? 'card-3d-turned' : ''} ${className}`}>   
            <div className="card-3d-wrapper">
                <Card3DContext.Provider value={{isTurned}}>
                    {children}
                </Card3DContext.Provider>
            </div>
        </article>
    )
}

/**
 * Display a 3D card back face
 * @param {{className: String}} props
 */
export function Card3DBack(props) {
    const { isTurned } = useContext(Card3DContext)
    const cleanProps = {...props}
    if (props.noBgColor) delete(cleanProps.noBgColor)
    if (props.noShadow) delete(cleanProps.noShadow)
    if (props.noShadowColor) delete(cleanProps.noShadowColor)
    return (
        <div {...cleanProps} className={className([
            'card-backface flex flex-col rounded',
            props.noBgColor ? '' : 'bg-white dark:bg-secondary-800',
            props.noShadow ? '' : 'shadow-lg hover:shadow-xl shadow-secondary-600 dark:shadow-black',
            'transition-all duration-500',
            isTurned ? 'z-10' : 'z-0',
            props.className ?? '',
        ])} />
    )
}

/**
 * Display a 3D card front face
 * @param {{className: String}} props
 */
export function Card3DFront(props) {
    const { isTurned } = useContext(Card3DContext)
    const cleanProps = {...props}
    if (props.noBgColor) delete(cleanProps.noBgColor)
    if (props.noShadow) delete(cleanProps.noShadow)
    return (
        <div {...cleanProps} className={className([
            'card-frontface flex flex-col rounded',
            props.noBgColor ? '' : 'bg-white dark:bg-secondary-800',
            props.noShadow ? '' : 'shadow-lg hover:shadow-xl shadow-secondary-600 dark:shadow-black',
            'transition-all duration-500',
            isTurned ? 'z-0' : 'z-10',
            props.className ?? '',
        ])} />
    )
}