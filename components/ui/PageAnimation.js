import React from 'react'
import { motion } from 'framer-motion'

export default function PageAnimation({ children }) {
    /**
     * Animation
     */
    const transitionDuration = 1
    const transition = { duration: transitionDuration }
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 200, y: 0 },
     }


    return (
        {children}
    )
}
