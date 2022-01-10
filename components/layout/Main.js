import React from 'react'
import { motion } from 'framer-motion'
import { className } from 'app/helpers'

export default function Main( props ) {
    const cleanProps = {...props}
    if (props.noPaddingX) delete(cleanProps.noPaddingX)
    if (props.noPaddingTop) delete(cleanProps.noPaddingTop)
    return (
        <motion.main { ...cleanProps } className={className([
            'pb-4 sm:pb-8 lg:pb-16',
            props.noPaddingX ? '' : 'px-4 sm:px-8 lg:px-16',
            props.noPaddingTop ? '' : 'pt-16 sm:pt-24',
            props.className ?? '',
        ])} />
    )
}
