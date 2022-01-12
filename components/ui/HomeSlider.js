import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { className, getDragConstraintsLeft, getSlideWidth, getTrackWidth, handleDragEnd } from 'app/helpers'
import { useWindowSize } from 'app/hooks'

// Icons
import PlusSvg from 'assets/images/icons/light/plus.svg'

/**
 * Component HomeSlider
 * @param {{slides: Array}}
 */
export default function HomeSlider( props) {
    const { slides } = props

    /**
     * Hooks
     */
    const [slideIndex, setSlideIndex] = useState(0)
    const [ slider,  setSlider ] = useState({slideWidth: 0, trackWidth: 0, dragConstraint: 0})
    const windowSize = useWindowSize()
    const wrapperRef = useRef(null)
    const trackRef = useRef(null)
    const controls = useAnimation()
    const accordionsRef = useRef({})

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
     * Render
     */
    return (
        <div className={className([
            'relative flex flex-col-reverse sm:block',
            props.className ?? '',
        ])}>
            {/* Headers */}
            <div className="sm:absolute sm:inset-0 select-none ">
                <div className="sm:grid sm:grid-cols-2 w-full sm:max-w-7xl mx-auto sm:px-8 lg:px-16">
                    <div className="">
                        {slides.map((slide, index) => (
                            <div 
                                className={className([
                                    'group relative z-1 px-4 cursor-pointer transition-all duration-200',
                                    (slideIndex === index) ? 'bg-secondary-100/75 dark:bg-secondary-900/75' : 'bg-gradient-to-r from-white/50 to-white/0 dark:from-secondary-800/50 dark:to-secondary-800/0',
                                ])} 
                                key={`HomeSliderHeader${index}`} 
                                onClick={() => goToSlide(index)}
                            >
                                <div className="flex items-center py-2 xl:py-4">
                                    <PlusSvg className="w-0 h-6 xl:h-8 group-hover:w-6 xl:group-hover:w-8 group-hover:mr-2 fill-current transition-all duration-500" />
                                    <h3 className="flex text-xl md:text-2xl lg:text-3xl font-semibold">
                                        {slide.title}
                                    </h3>
                                </div>
                                <div 
                                    className="overflow-hidden transition-all duration-500"
                                    ref={el => accordionsRef.current[index] = el}
                                    style={{height: (slideIndex === index && accordionsRef.current[index]) ? accordionsRef.current[index].scrollHeight : 0}}
                                >
                                    <p className="pb-2 xl:pb-4">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Slides */}
            <div className="sm:grid sm:grid-cols-3">
                <div 
                    className="relative sm:col-start-2 sm:col-span-2 aspect-video sm:aspect-square md:aspect-[4/3] lg:aspect-[16/10] 2xl:aspect-[16/7] overflow-hidden" 
                    ref={wrapperRef}
                >
                    <motion.div 
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
                            <div 
                                className="relative h-full" 
                                key={`HomeSliderSlide${index}`}
                            >
                                <Image 
                                    src={slide.image} 
                                    layout="fill"
                                    objectFit="cover"
                                    priority={true}
                                    draggable="false" 
                                    alt={slide.title} 
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
