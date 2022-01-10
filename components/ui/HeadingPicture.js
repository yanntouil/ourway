import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeadingPicture({ image }) {

    /**
     * Animation
     */
    const variants = {
        initial: { opacity: 0.8, rotate: -180, transition: { duration: 0.2 }},
        enter: { opacity: 1, rotate: 0 },
        exit: { opacity: 0.8, rotate: 180, transition: { delay: 0.3, duration: 0.2 } },
    }

    /**
     * Render
     */
    return (
        <>
            <div className="absolute -top-[35vw] -left-[15vw] w-[50vw] h-[50vw] z-20 rounded-full overflow-hidden flex items-end"/*-top-[35vw] -left-[15vw] */>
                <motion.div 
                    className="relative w-full h-[20vw]"
                    initial="initial" animate="enter" exit="exit"
                    variants={variants}
                >
                    <Image src={image} alt="" layout="fill" objectFit="cover" priority={true} />
                </motion.div>
            </div>
        </>
    )
}
