import { className } from "app/helpers"





/**
 * Display a square with an hovered content
 * @param {Object} props
 */
 export default function HoveredCube ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    return (
        <article {...cleanProps} className={className([
            'group relative flex justify-center items-center aspect-square overflow-hidden cursor-pointer',
            props.className ?? '',
        ])} />
    )
}

/**
 * HoveredCube content wrapper
 * @param {Object} props
 */
 export function HoveredCubeContent ( props ) {
    const cleanProps = {...props}
    if (props.className) delete(cleanProps.className)
    if (props.from) delete(cleanProps.from)
    const from = props.from ?? 'left'
    return (
        <div {...cleanProps} className={className([
            'absolute inset-0 flex flex-col justify-center items-center',
            'transition-all duration-500 ease-in-out',
            'transform',
            {
                '-translate-y-full group-hover:translate-y-0': from === 'top',
                'translate-x-full group-hover:translate-x-0': from === 'right',
                'translate-y-full group-hover:translate-y-0': from === 'bottom',
                '-translate-x-full group-hover:translate-x-0': from === 'left',
                'scale-0 group-hover:scale-100': from === 'center',
            },
            props.className ?? '',
        ])} />
    )
}
