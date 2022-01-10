import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { className } from 'app/helpers'
import { useWindowSize } from 'app/hooks'


/**
 * Component Slider
 * @param {{slides: Array}}
 */
export default function SliderWild({ slides, sliderTiming = 10 }) {
    /**
     * Hooks
     */
     const [slideIndex, setSlideIndex] = useState(0)
     const wrapperRef = useRef(null)
     const trackRef = useRef(null)
     const controls = useAnimation()

    /**
     * Move track to an index
     * @param {Number} index
     */
    const goToSlide = (index) => {
        setSlideIndex(index)
        controls.start({
            x: -wrapperRef.current.offsetWidth * index,
            transition: motionTransition,
        })
    }

    /**
     * Move track to the previous slide
     */
    const previousSlide = () => (slideIndex > 0) ? goToSlide(slideIndex - 1) : goToSlide(slideIndex)

    /**
     * Move track to the next slide
     */
    const nextSlide = () => (slideIndex < slides.length - 1) ? goToSlide(slideIndex + 1) : goToSlide(slideIndex)

    /**
     * Handle track drag end
     * @param {MouseEvent | TouchEvent | PointerEvent} e
     * @param {PanInfo} info
     */
    const onDragEnd = (e, info) => {
        const velocityRatio = 0.4
        const swipeConfidenceThreshold = wrapperRef.current.offsetWidth / 5
        const offset = info.offset.x * velocityRatio
        const correctedVelocity = info.velocity.x * velocityRatio
        const direction = correctedVelocity < 0 || offset < 0 ? 1 : -1
        const endOffset = direction > 0 ? Math.min(correctedVelocity, offset) : Math.max(correctedVelocity, offset)
        if (endOffset > swipeConfidenceThreshold) previousSlide()
        else if (endOffset < -swipeConfidenceThreshold) nextSlide()
        else goToSlide(slideIndex)
    }

    /**
     * Watcher on slider dimension
     */
    const [dragConstraintsLeft, setDragConstraintsLeft] = useState(0)
    const windowSize = useWindowSize()
    useEffect(() => {
        if (!trackRef.current) return
        const trackWidth = trackRef.current.offsetWidth,
              wrapperWidth = wrapperRef.current.offsetWidth
        setDragConstraintsLeft(wrapperWidth - trackWidth)
    }, [trackRef, windowSize])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => goToSlide(slideIndex), [windowSize])// Refresh slider position on window resize

    /**
     * Auto playing
     */
     const timeoutRef = useRef(null)
     const resetTimeout = () => {
         if (timeoutRef.current) clearTimeout(timeoutRef.current)
     }
     useEffect(() => {
         resetTimeout()
         timeoutRef.current = setTimeout(() => {
             goToSlide((slideIndex < slides.length - 1) ? slideIndex + 1 : 0)
         }, sliderTiming * 1000)
         return () => resetTimeout()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [slideIndex])
 
    /**
     * Animations
     */
    const motionTransition = { 
        type: "spring",
        bounce: 0,
    }
    const motionDrag = {// Dragging
        style: {
            width: `calc(${slides.length * 100}%)`,
            gridTemplateColumns: `repeat(${slides.length}, 1fr)`,
        },
        ref: trackRef,
        drag:"x",
        dragConstraints:{ left: dragConstraintsLeft, right: 0, },
        dragTransition:{ bounceStiffness: 600, bounceDamping: 20 },
        dragElastic: 1,
        onDragEnd,
        animate: controls,
        whileTap:{ cursor: "grabbing" },
    }

    return (
        <div className="relative h-full overflow-hidden" ref={wrapperRef}>
            {/* Slides */}
            <motion.div className="absolute grid h-full select-none cursor-grab" {...motionDrag}>
                {slides.map((slide, index) => (
                    <div className="relative h-full lg:grid lg:grid-cols-12" key={`SliderSlide${index}`}>
                        {/* Slide text */}
                        <div className="absolute inset-0 grid grid-cols-6">
                            <div className="col-span-5 sm:col-span-4 lg:col-span-3 flex items-end px-4 sm:px-8 lg:px-16 py-16">
                                <div className="relative z-2 p-8 bg-secondary-200/75 dark:bg-secondary-900/75">
                                    <h2 className="mb-4 text-3xl font-semibold">{slide.title}</h2>
                                    <p className="text-lg">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* Slide image */}
                        <div className="relative lg:col-start-4 lg:col-span-9 h-full">
                            <Image 
                                src={slide.cover} 
                                layout="fill"
                                objectFit="cover"
                                priority={true}
                                draggable="false" 
                                alt={slide.title} 
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
            {/* Navigation */}
            <div className="absolute right-0 bottom-0 left-4 sm:left-8 lg:left-16 flex justify-center lg:justify-start py-4">
                {slides.map((slide, index) => (
                    <button 
                        type="button" 
                        className="flex justify-center items-center w-8 h-8 p-2 rounded-full"
                        key={`PortfolioSliderNavigation${index}`}
                        onClick={() => goToSlide(index)}
                    >
                        <span className={className([
                            'block w-full h-full rounded-full border border-secondary-800 dark:border-white transition-colors',
                            {'bg-secondary-800 dark:bg-white': index === slideIndex}
                        ])}>
                            <span className="sr-only">{index + 1}</span>
                        </span>
                    </button>
                ))}
            </div>

        </div>
    )
}
