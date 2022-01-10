import React from 'react'
import { v4 as uuid } from 'uuid'
import { motion } from 'framer-motion'

/**
 * Display some background bubbles
 */
export default function BigBubbles() {
    

    /**
     * List of bubbles to display
     */
     const bubbles = [
        { bottom: 35 / 4 * 3 * -1, right: 35 / 6 * -1, size: 35, timing: 15, className: 'bg-secondary-200 dark:bg-secondary-700'},
        { bottom: 20 / 4 * 3 * -1, right: 20 / 3 * 2, size: 20, timing: 12, className: 'bg-secondary-400 dark:bg-secondary-600' },
    ]

    /**
     * Render
     */
    return (
        <>
            <div className="fixed bottom-0 right-0 -z-10" aria-hidden="true">
                {bubbles.map((bubble, index) => (
                    <motion.div 
                        key={`BigBubbles${index}`} 
                        className={`absolute -z-10 rounded-full ${bubble.className}`} 
                        animate={{ scale: [.95, 1.05 , .95] }}
                        transition={{ ease: "linear", duration: 12 + index * 5, repeat: Infinity }}
                        style={{ bottom: `${bubble.bottom}vw`, right: `${bubble.right}vw`, width: `${bubble.size}vw`, height: `${bubble.size}vw` }}
                    ></motion.div>
                ))}
            </div>
        </>
    )
}
