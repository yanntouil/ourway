import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { className } from 'app/helpers'
import { useWindowSize } from 'app/hooks'

/**
 * Display the portfolio slider
 * @param {{slides: Array, sliderTiming: number}} Props
 */
export default function PortfolioSlider({ slides, sliderTiming = 10 }) {

    /**
     * Hooks
     */
    const [slideIndex, setSlideIndex] = useState(0)
    const [slidesGap, setSlidesGap] = useState(0)
    const trackGap = 18 * 16// 18rem
    const wrapperRef = useRef(null)
    const trackRef = useRef(null)
    const holderRef = useRef(null)
    const controls = useAnimation()

    /**
     * Move track to an index
     * @param {Number} index
     */
    const goToSlide = (index) => {
        setSlideIndex(index)
        controls.start({
            x: -(holderRef.current.offsetWidth + slidesGap) * index,
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
        const swipeConfidenceThreshold = holderRef.current.offsetWidth / 5
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
              wrapperWidth = wrapperRef.current.offsetWidth,
              holderWidth = holderRef.current.offsetWidth,
              smallImageWidth = holderWidth / 3 / 2
        setDragConstraintsLeft(holderWidth - trackWidth)
        setSlidesGap((wrapperWidth - holderWidth) / 2 + smallImageWidth / 2)
        goToSlide(slideIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trackRef, windowSize])

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
    const motionTiming = 0.5// Animation timing
    const motionDrag = {// Dragging
        style: {
            width: `calc(${slides.length * 100}% + ${(slides.length - 1) * slidesGap}px)`,
            gap: `${slidesGap}px`,
            cursor: "grab",
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

    /**
     * Render
     */
    return (
        <div className="relative">
            <div className="group relative w-3/4">
                <div className="relative">
                    <PortfolioSliderBubbles />
                    <div className="grow flex justify-center aspect-[19/9] rounded-full overflow-x-hidden" ref={wrapperRef} style={{}}>
                        <PortfolioSliderPrevious slides={slides} slideIndex={slideIndex} goToSlide={goToSlide}/>
                        <div className="relative h-full aspect-square" ref={holderRef}>
                            <motion.div className="absolute grid grid-cols-5 h-full select-none" {...motionDrag}>
                                {slides.map((slide, index) => (
                                    <PortfolioSliderSlide key={`PortfolioSlider${index}`} slide={slide} />
                                ))}
                            </motion.div>
                        </div>
                        <PortfolioSliderNext slides={slides} slideIndex={slideIndex} goToSlide={goToSlide} />
                    </div>
                </div>
                <PortfolioSliderNavigation slides={slides} slideIndex={slideIndex} goToSlide={goToSlide} />
            </div>
            <PortfolioSliderInfo slide={slides[slideIndex]} slideIndex={slideIndex} motionTiming={motionTiming} />
        </div>
    )
}

/**
 * Display navigation
 * @param {{slides: Array, slideIndex: Number, goToSlide: Function}} props
 */
export function PortfolioSliderNavigation({ slides, slideIndex, goToSlide }) {
    return (
        <div className="flex justify-center pt-8">
            {slides.map((slide, index) => (
                <button 
                    type="button" 
                    className="flex justify-center items-center w-8 h-8 p-2 rounded-full"
                    key={`PortfolioSliderNavigation${index}`}
                    onClick={() => goToSlide(index)}
                >
                    <span className={className([
                        'block w-full h-full rounded-full border border-secondary-500 transition-colors',
                        {'bg-secondary-500': index === slideIndex}
                    ])}>
                        <span className="sr-only">{index + 1}</span>
                    </span>
                </button>
            ))}
        </div>
    )
}

/**
 * Display button to switch on previous page
 * @param {{slides: Array, slideIndex: Number, goToSlide: Function}} props
 */
export function PortfolioSliderPrevious({ slides, slideIndex, goToSlide }) {
    return (
        <div className="flex justify-center items-center w-16">
            {(slideIndex > 0) && (
                <button 
                    type="button" 
                    className="relative z-1 flex justify-center items-center w-16 h-16 rounded-full text-transparent group-hover:text-secondary-400 transition-colors"
                    onClick={() => (slideIndex > 0) ? goToSlide(slideIndex - 1) : goToSlide(slides.length - 1)}
                >
                    <svg className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"/></svg>
                    <span className="sr-only">Previous Project</span>
                </button>
            )}
        </div>
    )
}

/**
 * Display button to switch on next page
 * @param {{slides: Array, slideIndex: Number, goToSlide: Function}} props
 */
export function PortfolioSliderNext({ slides, slideIndex, goToSlide }) {
    return (
        <div className="flex justify-center items-center w-16">
            {(slideIndex < slides.length - 1) && (
                <button 
                    type="button" 
                    className="relative z-1 flex justify-center items-center w-16 h-16 rounded-full text-transparent group-hover:text-secondary-400 transition-colors"
                    onClick={() => (slideIndex < slides.length - 1) ? goToSlide(slideIndex + 1) : goToSlide(0)}
                >
                    <svg className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"/></svg>
                    <span className="sr-only">Next project</span>
                </button>
            )}
        </div>
    )
}

/**
 * Display decorative background bubbles
 */
 export function PortfolioSliderBubbles() {
    /**
     * Set bubbles
     */
    const bubbles = [{
        style: { top: '2.5vw', right: '-5vw', width: '12vw' },
        className: 'bg-secondary-700 bg-opacity-95',
    }, {
        style: { top: '-2vw', left: '-5vw', width: '15vw' },
        className: 'bg-secondary-500 ',
    }, {
        style: { top: '-2vw', left: '-20vw', width: '25vw' },
        className: 'border-2 border-secondary-400',
    }, {
        style: { bottom: '2vw', left: '-0.5vw', width: '5vw' },
        className: 'bg-secondary-700',
    }]

    /**
     * Render
     */
    return (
        <div className="absolute inset-0 flex justify-center" aria-hidden="true">
            <div className="relative h-full aspect-square">
                {bubbles.map((bubble, index) => (
                    <span 
                        className={className([
                            'absolute -z-10 block aspect-ratio-square rounded-full',
                            bubble.className,
                        ])} 
                        style={bubble.style}
                        key={`PortfolioSliderBubbles${index}`}
                    ></span>
                ))}
            </div>
        </div>
    )
}

/**
 * Display a slide
 * @param {{slide: object, direction: number, motionTiming: number}} props
 */
export function PortfolioSliderSlide({ slide }) {
    return (
        <div className="relative h-full aspect-ratio-square">
            <div className="relative w-full aspect-ratio-square bg-secondary-200 rounded-full shadow-md">
                <Image 
                    src={slide.imageCover} 
                    layout="fill" 
                    priority={true} 
                    objectFit="cover" 
                    className="rounded-full" 
                    draggable="false" 
                    alt=""
                />
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 aspect-ratio-square transform translate-x-1/2 rounded-full shadow-md">
                <div className="relative w-full h-full" /* next/image wrapper */>
                    <Image 
                        src={slide.imageSmall} 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-full" 
                        draggable="false" 
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}


/**
 * Display slide info
 * @param {{slide: object, motionTiming: number, currentPage: number}} props
 */
export function PortfolioSliderInfo({ slide, slideIndex, motionTiming }) {
    /**
     * Animation
     */
    const motionInfo = {// Text animation
        key: `PortfolioSliderInfo${slideIndex}`,
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        variants: {
            initial: { y: '-100%', opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { opacity: 0 },
        },
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: motionTiming }
        },
    }

    /**
     * Render
     */
    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div className="absolute top-0 right-0 w-2/5 flex flex-col p-8 gap-2 bg-secondary-200 bg-opacity-50 dark:bg-secondary-600 dark:bg-opacity-50" {...motionInfo}>
                <h2 className="text-xl text-secondary-600 dark:text-secondary-300">{slide.title}</h2>
                <p>{slide.description}</p>
                <button type="button" className="text-left">Show project</button>
            </motion.div>
        </AnimatePresence>
    )
}
