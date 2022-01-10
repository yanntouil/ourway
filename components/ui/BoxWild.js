import { className } from "app/helpers"




/**
 * BoxWild display a container with text and image
 * @param {Object} props
 */
export default function BoxWild ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <article {...cleanProps} className={className([
            'group relative flex flex-col justify-center',
            props.className ?? '',
        ])} />
    )
}

/**
 * BoxWild image wrapper
 * @param {Object} props
 */
export function BoxWildImage ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <div className="md:absolute md:inset-0 md:grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto overflow-hidden">
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    {props.children}
                </div>
            </div>
            <div className="bg-secondary-900 hidden md:block"></div>
        </div>
    )
}

/**
 * BoxWild text wrapper
 * @param {Object} props
 */
export function BoxWildBody ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <div className="relative md:grid md:grid-cols-2 w-full md:max-w-7xl px-4 sm:px-8 lg:px-16 mx-auto bg-secondary-900 md:bg-transparent">
            <div></div>
            <div className="md:px-8 py-8 text-white">
                {props.children}
            </div>
        </div>
    )
}
