import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { className, getDragConstraintsLeft, getSlideWidth, getTrackWidth, handleDragEnd } from 'app/helpers'
import { useWindowSize } from 'app/hooks'


/**
 * Component Slider
 * @param {{slides: Array}}
 */
export default function SliderFullscreen({ slides, sliderTiming = 10 }) {
    /**
     * Hooks
     */
    const [slideIndex, setSlideIndex] = useState(0)
    const [ slider,  setSlider ] = useState({slideWidth: 0, trackWidth: 0, dragConstraint: 0})
    const windowSize = useWindowSize()
    const wrapperRef = useRef(null)
    const controls = useAnimation()

    /**
     * Move track to an index
     * @param {Number} index
     */
    const goToSlide = (index) => {
        setSlideIndex(index)
        controls.start({
            x: -slider.slideWidth * index,
            transition: {type: "spring", bounce: 0},
        })
    }

    /**
     * Watcher: Set and refresh track width, slide width, drag contraint left and drag position on window resize
     */
     useEffect(() => {
        if (!wrapperRef.current) return
        const wrapperW = wrapperRef.current.offsetWidth
        const slidetW = getSlideWidth(wrapperW, 1)
        const trackW = getTrackWidth(slides.length, slidetW)
        setSlider({
            slideWidth: slidetW,
            trackWidth: trackW,
            dragConstraint: getDragConstraintsLeft(wrapperW, trackW),
        })
        goToSlide(slideIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wrapperRef, windowSize])

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
     * Render
     */
    return (
        <div className="relative h-full overflow-hidden" ref={wrapperRef}>
            <motion.div // Track
                className="absolute grid h-full select-none cursor-grab"
                style={{
                    width: `${slider.trackWidth}px`,
                    gridTemplateColumns: `repeat(${slides.length}, ${slider.slideWidth}px)`,
                }}
                drag="x"
                dragConstraints={{left: slider.dragConstraint, right: 0}}
                dragTransition={{bounceStiffness: 600, bounceDamping: 20}}
                dragElastic="1"
                onDragEnd={(e, info) => handleDragEnd(info, wrapperRef.current.offsetWidth, slideIndex, slides.length, goToSlide)}
                animate={controls}
                whileTap={{cursor: "grabbing"}}
            >
                {slides.map((slide, index) => (
                    <div // Slide
                        className="relative h-full" 
                        key={`SliderSlide${index}`}
                    >
                        <Image 
                            src={slide.image} 
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                            draggable="false" 
                            alt={slide.title} 
                        />
                        <div className="absolute bottom-8 right-8 flex flex-col max-w-xl gap-4 p-8 bg-secondary-800/75 text-white">
                            <h3 className="text-3xl font-semibold">{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
            <div className="absolute right-0 bottom-0 left-0 flex justify-center py-4">
                <div className="flex rounded-full backdrop-brightness-150">
                    {slides.map((slide, index) => (
                        <button 
                            type="button" 
                            className="flex justify-center items-center w-8 h-8 p-2 rounded-full"
                            key={`PortfolioSliderNavigation${index}`}
                            onClick={() => goToSlide(index)}
                        >
                            <span className={className([
                                'block w-full h-full rounded-full border border-secondary-800 transition-colors',
                                {'bg-secondary-800': index === slideIndex}
                            ])}>
                                <span className="sr-only">{index + 1}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
