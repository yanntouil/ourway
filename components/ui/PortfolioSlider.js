import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { className } from 'app/helpers'

/**
 * Display the portfolio slider
 * @param {{slides: Array, sliderTiming: number}} Props
 */
export default function PortfolioSlider({ slides, sliderTiming = 10 }) {

    /**
     * Hooks
     */
    const swipeConfidenceThreshold = 100// Move in config
    const totalPage = slides.length// Shortcut
    const [[currentPage, direction, pageInTransition], setPage] = useState([1, 0])

    /**
     * Go to the previous page
     */
    const previousPage = () => {
        if (pageInTransition) return
        return (currentPage === 1) ? false : goToPage(currentPage - 1)// goToPage(totalPage)
    }

    /**
     * Go to the next page
     */
    const nextPage = () => {
        if (pageInTransition) return
        if (currentPage >= totalPage) return// goToPage(1)
        goToPage(currentPage + 1)
    }

    /**
     * Go to a page
     * @param {number} pageNumber
     */
    const goToPage = (pageNumber) => {
        if (pageInTransition) return
        setPage([pageNumber, pageNumber > currentPage ? 1 : -1, true])
        setTimeout(() => setPage([pageNumber, pageNumber > currentPage ? 1 : -1, false]), motionTiming)
    }

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
            const page = (currentPage >= totalPage) ? 1 : currentPage + 1
            setPage([page, page > currentPage ? 1 : -1, false])
        }, sliderTiming * 1000)
        return () => resetTimeout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    /**
     * Animations
     */
    const motionTiming = 0.5// Animation timing
    const motionDrag = {// Dragging
        style:{cursor: "grab"},
        drag:"x",
        dragConstraints:{ right: 0, left: 0 },
        dragTransition:{ bounceStiffness: 600, bounceDamping: 20 },
        dragElastic: 0.1,
        whileTap:{ cursor: "grabbing" },
        onDragEnd: (e, { offset }) => {
            if (offset.x > swipeConfidenceThreshold) previousPage()
            else if (offset.x < -swipeConfidenceThreshold) nextPage()
        },
    }

    /**
     * Render
     */
    return (
        <>
            <div className="relative grid grid-cols-8">
                <div className="group col-start-2 col-span-3 relative aspect-ratio-square">
                    <PortfolioSliderBubbles />
                    {currentPage > 1 && <PortfolioSliderPrevious previousPage={previousPage} /* not display on first page */ />}
                    <div className="w-full h-full">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div className="flex h-full gap-16" {...motionDrag}>
                                <PortfolioSliderSlide 
                                    key={`PortfolioSliderSlide${currentPage}`} 
                                    slide={slides[currentPage - 1]} 
                                    direction={direction} 
                                    motionTiming={motionTiming} 
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {currentPage < totalPage && <PortfolioSliderNext  nextPage={nextPage} /* not display on last page */ />}
                </div>
                <div className="col-span-4">
                    <PortfolioSliderInfo 
                        slide={slides[currentPage - 1]} 
                        motionTiming={motionTiming} 
                        currentPage={currentPage} 
                    />
                </div>
                <PortfolioSliderNavigation totalPage={totalPage} currentPage={currentPage} goToPage={goToPage} />
            </div>
        </>
    )
}

/**
 * Display navigation
 * @param {{totalPage: number, currentPage: number, goToPage: function}} props
 */
export function PortfolioSliderNavigation({ totalPage, currentPage, goToPage }) {
    /**
     * Set pages
     */
    const pages = [...Array(totalPage).keys()].map((page, index) => index + 1)

    /**
     * Render
     */
    return (
        <div className="col-span-5 flex justify-center pt-8">
            {pages.map((page) => (
                <button 
                    type="button" 
                    className="flex justify-center items-center w-8 h-8 p-2 rounded-full"
                    key={`portfolio-slider-navigation-${page}`}
                    onClick={() => goToPage(page)}
                >
                    <span className={className([
                        'block w-full h-full rounded-full border border-secondary-500 transition-colors',
                        {'bg-secondary-500': page === currentPage}
                    ])}>
                        <span className="sr-only">{page}</span>
                    </span>
                </button>
            ))}
        </div>
    )
}

/**
 * Display button to switch on previous page
 * @param {{previousPage: function}} props
 */
export function PortfolioSliderPrevious({ previousPage }) {
    return (
        <div className="absolute top-0 bottom-0 -left-1/3 flex justify-center items-center">
            <button 
                type="button" 
                className="flex justify-center items-center w-16 h-16 rounded-full text-transparent group-hover:text-secondary-400 transition-colors"
                onClick={previousPage}
            >
                <svg className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"/></svg>
                <span className="sr-only">Previous Project</span>
            </button>
        </div>
    )
}

/**
 * Display button to switch on next page
 * @param {{nextPage: function}} props
 */
export function PortfolioSliderNext({ nextPage }) {
    return (
        <div className="absolute top-0 bottom-0 -right-1/3 flex justify-center items-center">
            <button 
                type="button" 
                className="flex justify-center items-center w-16 h-16 rounded-full text-transparent group-hover:text-secondary-400 transition-colors"
                onClick={nextPage}
            >
                <svg className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"/></svg>
                <span className="sr-only">Next project</span>
            </button>
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
        <>  
            {bubbles.map((bubble, index) => (
                <span 
                    aria-hidden="true"
                    className={'absolute -z-10 block aspect-ratio-square rounded-full ' + bubble.className} 
                    style={bubble.style}
                    key={`portfolio-slider-bubbles-${index}`}
                ></span>
            ))}
        </>
    )
}

/**
 * Display a slide
 * @param {{slide: object, direction: number, motionTiming: number}} props
 */
export function PortfolioSliderSlide({ slide, direction, motionTiming }) {
    
    /**
     * Animation
     */
    const motionSlide = {// Images animation
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        custom: direction,
        variants: {
            initial: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
            animate: { zIndex: 1, x: 0, opacity: 1 },
            exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0 }),
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
        <motion.div className="relative h-full aspect-ratio-square" {...motionSlide}>
            <div className="relative w-full aspect-ratio-square bg-secondary-200 rounded-full shadow-lg">
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
            <div className="absolute bottom-0 right-0 w-1/3 aspect-ratio-square transform translate-x-1/2 rounded-full shadow-lg">
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
        </motion.div>
    )
}


/**
 * Display slide info
 * @param {{slide: object, motionTiming: number, currentPage: number}} props
 */
export function PortfolioSliderInfo({ slide, motionTiming, currentPage }) {
    
    /**
     * Animation
     */
    const motionInfo = {// Text animation
        key: `portfolio-slider-${currentPage}-info`,
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
            <motion.div className="relative flex flex-col p-8 gap-2 bg-secondary-200 bg-opacity-50 dark:bg-secondary-600 dark:bg-opacity-50" {...motionInfo}>
                <h2 className="text-xl text-secondary-600 dark:text-secondary-300">{slide.title}</h2>
                <p>{slide.description}</p>
                <button type="button" className="text-left">Show project</button>
            </motion.div>
        </AnimatePresence>
    )
}
