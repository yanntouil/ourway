import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInterval } from 'app/hooks'

export default function HeadingAnimated({ sentences, letterPopTiming = 80, breakTiming = 3000 }) {

    /**
     * States
     */
    const [animationKey, setAnimationKey] = useState(0)// Incremented key use to force refreshing
    const [sentencesIndex, setSentencesIndex] = useState(0)// Index of current sentence displayed

    /**
     * Relaunch animation with next sentence
     */
    useInterval(() => nextSentence(), (sentences[sentencesIndex].length * letterPopTiming + breakTiming))

    /**
     * Switch to the next sentence
     */
    const nextSentence = () => {
        if(sentencesIndex + 1 >= sentences.length) setSentencesIndex(0)// Last go on first
        else setSentencesIndex(sentencesIndex + 1)// Next
        setAnimationKey(animationKey + 1)// Increment key to force refreshing
    }

    /**
     * sentenceToArray
     * @return {Array}
     */
    const sentenceToArray = () => [...sentences[sentencesIndex].replace(/ /g, '\u00a0')]// replace space
    
    /**
     * Framer Animations
     */
    const motionContainer = {
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        variants: {
            initial: { 
                opacity: 0,
            },
            animate: {
                opacity: 1,
                perspective: 500,
                transition: { staggerChildren: letterPopTiming / 1000},
            }
        }
    }

    const motionLetter = {
        variants: {
            initial: { opacity: 0,  sclale: 5, z: 500, x: '25vw' },
            animate: { opacity: 1, sclale: 1, z: 0, x: 0 },
        },
        transition: {ease: [0.17, 0.67, 0.83, 0.67]},
    }

    /**
     * Render
     */
    return (
        <motion.p 
            className="relative flex text-secondary-600 dark:text-secondary-300 font-semibold text-2xl leading-normal"
            key={`HeadingAnimated${sentencesIndex}`}
            {...motionContainer}
        >
            {sentenceToArray().map((letter, index) => (// Display each letters
                <motion.span key={`HeadingAnimated${sentencesIndex}-${index}`} {...motionLetter}>
                    {letter}
                </motion.span>
            ))}&nbsp;
        </motion.p>
    )
}
