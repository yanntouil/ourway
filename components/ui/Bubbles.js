import React, { useState } from 'react'
import { useInterval, useTimeout } from '../../app/hooks'

/**
 * Display some background bubbles
 */
export default function Bubbles() {

    /**
     * List of bubbles to display
     */
    const bubbles = [
        { y: '8', x: '32', size: '2',},
        { y: '6', x: '34', size: '1.7' },
        { y: '9', x: '36', size: '1.5' },
        { y: '16', x: '45', size: '1.7' },
        { y: '23', x: '42', size: '1.9' },
        { y: '30', x: '54', size: '1.5' },
        { y: '12', x: '25', size: '3' },
    ]

    /**
     * Hooks
     */
    const [animateStyle, setAnimatestyle]  = useState(bubbles.map(() => ({})))

    /**
     * Generate a random animated style
     */
    const randomAnimatedStyle = (bubble) => ({
        transform: `translate(${Math.floor(Math.random() * 1.2 * 100) / 100 + "vw"}, ${Math.floor(Math.random() * 1.2 * 100) / 100 + "vw"}) rotate(${Math.floor(Math.random() * 360)}deg)`,
        transformOrigin: '20% 40%',
        top: `${bubble.y}vw`, 
        left: `${bubble.x}vw`,
        width: `${bubble.size}vw`,
        height: `${bubble.size}vw`,
    })

    /**
     * Update animated style
     */
    const updateAnimatedStyle = () => setAnimatestyle(bubbles.map((bubble) => randomAnimatedStyle(bubble)))

    /**
     * Loop animation
     */
    useTimeout(() =>  updateAnimatedStyle(), 20)
    useInterval(() => updateAnimatedStyle(), 10000)

    /**
     * Return TW bg color (alternate with modulo)
     * @param {number} index
     */
    const generateColors = (index) => (index % 3 === 0) ? colors[2] : (index % 2 === 0) ? colors[1] : colors[0]

    /**
     * List of colors use in generateColors
     */
    const colors = [
        'bg-primary-200 dark:bg-secondary-700',
        'bg-primary-500 dark:bg-secondary-600',
        'bg-primary-800 dark:bg-secondary-900',
    ]

    /**
     * Render
     */
    return (
        <>  
            {bubbles.map((bubble, index) => (
                <div key={`bubble-${index}`} aria-hidden="true" className={`absolute -z-10 rounded-full transition-transform duration-10000 ease-linear ${generateColors(index)}`} style={animateStyle[index]}></div>
            ))}
        </>
    )
}
