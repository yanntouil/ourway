import React, { useState } from 'react'
import { useInterval, useTimeout } from 'app/hooks'

export default function AnimatedBubble({ size, x, y, className }) {
    /**
     * Hooks
     */
    const [animateStyle, setAnimatestyle]  = useState({})


    /**
     * Update animated style
     */
    const updateAnimatedStyle = () => setAnimatestyle({
        transform: `translate(${Math.floor(Math.random() * 1.2 * 100) / 100 + "vw"}, ${Math.floor(Math.random() * 1.2 * 100) / 100 + "vw"}) rotate(${Math.floor(Math.random() * 360)}deg)`,
        transformOrigin: '20% 40%',
        top: `${y}vw`, 
        left: `${x}vw`,
        width: `${size}vw`,
        height: `${size}vw`,
    })

    /**
     * Loop animation
     */
    useTimeout(() =>  updateAnimatedStyle(), 20)
    useInterval(() => updateAnimatedStyle(), 10000)
 


    return (
        <div 
            aria-hidden="true" 
            className={`absolute -z-10 rounded-full transition-transform duration-10000 ease-linear ${className}`} 
            style={animateStyle}
        />
    )
}
