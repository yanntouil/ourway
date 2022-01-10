import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { v4 as uuid } from 'uuid'
import { useResponsive, useTranslation, useWindowSize } from 'app/hooks'
import { translationSelector } from 'app/reducers'
import { getDragConstraintsLeft, getSlideWidth, getTrackWidth, handleDragEnd, pagination } from 'app/helpers'
import projectsList from 'data/projects'

// Components
import Main from 'components/layout/Main'
import Section, { SectionSecondary, SectionTitle } from 'components/ui/Section'
import SliderFullscreen from 'components/ui/SliderFullscreen'
import HoveredCube, { HoveredCubeContent } from 'components/ui/HoveredCube'

// Icons
import ChevronRightIcon from 'assets/images/icons/light/chevron-right.svg'
import ChevronLeftIcon from 'assets/images/icons/light/chevron-left.svg'

// Categories
import designImg from 'assets/images/portfolio/design.png'
import printImg from 'assets/images/portfolio/print.png'
import websiteImg from 'assets/images/portfolio/website.png'
import learningImg from 'assets/images/portfolio/learning.png'


/**
 * Portfolio page
 */
export default function Index() {
    /**
     * Page setup
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pagePortfolio')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])

    /** @state category */
    const [ category, setCategory ] = useState('')

    /** @state categories */
    const [ categories ] = useState([
        { name: 'design', title: __('categories.design'), image: designImg },
        { name: 'print', title: __('categories.print'), image: printImg },
        { name: 'website', title: __('categories.website'), image: websiteImg },
        { name: 'learning', title: __('categories.learning'), image: learningImg }
    ])

    /**
     * Toggle category
     * @param {String} name
     */
    const toggleCategory = (name) => {
        setCategory((name === category) ? '' : name)
        setSlideIndex(0)
    }

    /**
     * @state projects
     */
    const [ projects ] = useState(projectsList.map((project) => ({
        ...project, 
        ...project[currentLanguage]
    })))

    /** @state slideIndex */
    const [ slideIndex, setSlideIndex ] = useState(0)

    /**
     * Render
     */
    return (
        <Main noPaddingX noPaddingTop>

            {/* Hero Slider */}
            <Section className="h-screen" noPadding>
                <SliderFullscreen 
                    slides={projects.filter(// Hero projects
                        project => project.hero
                    )}
                />
            </Section>

            {/* Portfolio */}
            <Section>
                <div className="flex flex-col justify-center w-full max-w-7xl min-h-screen-header px-4 sm:px-8 lg:px-16 mx-auto">
                    <SectionTitle>{__('title')}</SectionTitle>
                    <SectionSecondary>{__('secondary')}</SectionSecondary>
                    <div className="grid grid-cols-1 xl:grid-rows-7 gap-8 mt-8">
                        <ProjectsCategories {...{categories, category, toggleCategory}} />
                        <ProjectsSlider 
                            slides={category === '' ? // all projects or active category
                                projects : 
                                projects.filter(
                                    project => project.category === category
                                )
                            }

                            {...{slideIndex, setSlideIndex}}
                        />
                    </div>
                </div>
            </Section>

        </Main>
    )
}

/**
 * Display categories
 * @param {{categories: Array, category: String, toggleCategory: Function} props 
 */
export function ProjectsCategories ({ categories, category, toggleCategory }) {
    /**
     * Render
     */
    return (
        <div className="xl:row-span-2 grid grid-cols-2 md:grid-cols-4 w-full gap-8">
            {categories.map((item, index) => (
                <HoveredCube // Category select
                    className="cursor-pointer select-none" 
                    key={uuid()} 
                    onClick={() => toggleCategory(item.name)}
                >
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:transform group-hover:scale-125 group-hover:rotate-12">
                        <Image 
                            src={item.image} 
                            layout="fill" 
                            objectFit="cover" 
                            priority={true} 
                            alt={item.title} 
                        />
                    </div>
                    {category === item.name && (// Selected
                        <div className="absolute inset-0 bg-primary-500/25 backdrop-grayscale" />
                    )}
                    <HoveredCubeContent 
                        className="bg-black/50 text-4xl text-white font-bold" 
                        from={['left', 'top', 'right', 'bottom'][index]}
                    >{item.title}</HoveredCubeContent>
                </HoveredCube>
            ))}
        </div>
    )
}

/**
 * Projects Slider
 */
export function ProjectsSlider ({ slides, slideIndex, setSlideIndex, gridCols = 8,  gap = 32 }) {

    /** @type {Object} */
    const wrapperRef = useRef(null)

    /** @type {Object} */
    const windowSize = useWindowSize()

    /** @type {Object} */
    const propsShared = { gridCols, gap }

    /** @type {Object} */
    const animate = useAnimation()

    /** @state slider */
    const [ slider,  setSlider ] = useState({
        slideWidth: 0, 
        trackWidth: 0, 
        dragConstraint: 0
    })

    /**
     * Watcher: Set and refresh track width, slide width, drag contraint left and drag position on window resize
     */
    useEffect(() => {
        if (!wrapperRef.current) return
        const wrapperW = wrapperRef.current.offsetWidth
        const slidetW = getSlideWidth(wrapperW, 1, gap)
        const trackW = getTrackWidth(slides.length, slidetW, gap)
        setSlider({
            slideWidth: slidetW,
            trackWidth: trackW,
            dragConstraint: getDragConstraintsLeft(wrapperW, trackW),
        })
        setSlideIndex(slideIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize])// On window resize

    /**
     * Move track when slide index change
     */
    useEffect(() => {
        animate.start({
            x: -slider.slideWidth * slideIndex - slideIndex * gap,
            transition: {type: "spring", bounce: 0},
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideIndex, windowSize])

    /**
     * Render
     */
    return (
        <>
            <div // Wrapper
                className="relative xl:row-span-4 overflow-hidden" // aspect-[16/30] sm:aspect-[16/17] xl:aspect-auto
                ref={wrapperRef}
            >
                <motion.div // Track
                    className="relative xl:absolute grid xl:h-full select-none cursor-grab gap-8"
                    style={{
                        width: `${slider.trackWidth}px`,
                        gridTemplateColumns: `repeat(${slides.length}, ${slider.slideWidth}px)`,
                    }}
                    drag="x"
                    dragConstraints={{left: slider.dragConstraint, right: 0}}
                    dragTransition={{bounceStiffness: 600, bounceDamping: 20}}
                    dragElastic="1"
                    onDragEnd={(e, info) => handleDragEnd(info, wrapperRef.current.offsetWidth, slideIndex, slides.length, setSlideIndex)}
                    animate={animate}
                    whileTap={{cursor: "grabbing"}}
                >
                    {slides.map((slide, index) => (
                        <ProjectsSliderProject // Project slide
                            project={slide} 
                            key={uuid()}
                            {...propsShared}
                        />
                    ))}
                </motion.div>
            </div>
            <ProjectsSliderNavigation // Pagination
                slides={slides} 
                slideIndex={slideIndex} 
                setSlideIndex={setSlideIndex} 
                {...propsShared}
            />
        </>
    )
}

/**
 * Display slider navigation
 * @param {{ slides: Array, slideIndex: Number, setSlideIndex: Function, gridCols: Number, gap: Number }} props
 */
export function ProjectsSliderNavigation ({ slides, slideIndex, setSlideIndex }) {
    const __ = useTranslation('pagePortfolio')
    const media = useResponsive()
    const pagesDisplay = media.max('md') ? 5 : 8

    /**
     * Empty slot to complete grid will be replace by blink div
     * @type {Array}
     */
    const emptySlots = (slides.length < pagesDisplay) ? [...Array(pagesDisplay - slides.length).keys()] : []
    
    /**
     * Generate paginations
     * @type {Array}
     */
    const pages = pagination(slideIndex + 1 , slides.length, {
        neighboursLeft: Math.ceil((pagesDisplay - 1) / 2),
        neighboursRight: pagesDisplay - 1 - Math.ceil((pagesDisplay - 1) / 2),
        firstAndLast: false, 
        nextAndPrevious: false
    })

    /**
     * Render
     */
    return (
        <ul className="relative grid gap-8 overflow-hidden"
            style={{gridTemplateColumns: `repeat(${pagesDisplay}, 1fr)`,}}
        >
            {slideIndex > 0 &&  (
                <li className="absolute top-0 bottom-0 left-0 flex justify-center items-center">
                    <button // Previous
                        className="relative z-2 flex justify-end items-center w-12 h-12 md:w-16 md:h-16 -ml-6 md:-ml-8 p-2 rounded-full bg-secondary-800/90 text-white"
                        onClick={() => setSlideIndex(slideIndex <= 0 ? 0 : slideIndex - 1)}
                    >
                        <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6 fill-current" aria-hidden="true" />
                        <span className="sr-only">{__('previous-project')}</span>
                    </button>
                </li>
            )}
            {pages.map((page) => (
                <li  // Page
                    className="aspect-square"
                    key={uuid()}
                >
                    <button
                        className="relative w-full h-full"
                        onClick={() => setSlideIndex(page - 1)}
                    >
                        <Image 
                            src={slides[page - 1].thumbnail}
                            alt={slides[page - 1].title}
                            layout="fill" 
                            objectFit="cover" 
                            priority={false}  
                            draggable="false"
                        />
                        <span className="sr-only">{__('go-to-project')} {slides[page - 1].title}</span>
                        {(slideIndex === page - 1) && (
                            <div // Selected item
                                className="absolute inset-0 bg-primary-500/25 backdrop-grayscale" 
                                aria-hidden="true" 
                            />
                        )}
                    </button>
                </li>
            ))}
            {emptySlots.map((emptySlot, index) => (
                <li // Empty item to complet grid
                    className="aspect-square bg-secondary-800/50 dark:bg-secondary-900/50 animate-pulse"
                    key={uuid()}
                    aria-hidden="true"
                />
            ))}
            {slideIndex < slides.length - 1 &&  (
                <li className="absolute top-0 bottom-0 right-0 flex justify-center items-center">
                    <button // Next
                        className="relative z-2 flex justify-start items-center w-12 h-12 md:w-16 md:h-16 -mr-6 md:-mr-8 p-2 rounded-full bg-secondary-800/90 text-white"
                        onClick={() => setSlideIndex(slideIndex >= slides.length - 1 ? slides.length - 1 : slideIndex + 1)}
                    >
                        <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6 fill-current" aria-hidden="true" />
                        <span className="sr-only">{__('next-project')}</span>
                    </button>
                </li>
            )}
        </ul>
    )
}

/**
 * Display slider project
 * @param {{project: {image: {src: String}, description: String, title: String, stacks: Array, applications: String, links: Array }} props 
 */
export function ProjectsSliderProject ({ project }) {
    const __ = useTranslation('pagePortfolio')

    /**
     * Render
     */
    return (
        <article className="relative h-full grid grid-cols-2 grid-rows-auto-1fr-1fr sm:grid-rows-auto-1fr xl:grid-cols-4 xl:grid-rows-2 gap-8">
            <h3 className="sr-only">{project.title}</h3>
            <div className="aspect-video xl:aspect-auto col-span-2 xl:col-span-3 xl:row-span-2 bg-gray-200">
                <div className="relative w-full h-full">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        layout="fill" 
                        objectFit="cover" 
                        priority={true}  
                        draggable="false" 
                    />
                </div>
            </div>
            <aside className="col-span-2 sm:col-span-1 xl:col-span-1 xl:row-span-1 xl:aspect-square px-6 py-6 overflow-hidden bg-secondary-800 dark:bg-secondary-900 text-white">
                <h4 className="text-xl font-semibold">{__('project.info')}</h4>
                <p className="text-sm line-clamp-10">{project.description}</p>
            </aside>
            <div className="col-span-2 sm:col-span-1 xl:col-span-1 xl:row-span-1 xl:aspect-square flex flex-col px-6 py-6 gap-4 bg-secondary-800 dark:bg-secondary-900 text-white overflow-hidden">
                {project.stacks && (
                    <aside>
                        <h4 className="text-xl font-semibold">{__('project.stacks')}</h4>
                        <p>{project.stacks.join(', ')}</p>
                    </aside>
                )}
                {project.applications && (
                    <aside>
                        <h4 className="text-xl font-semibold">{__('project.applications')}</h4>
                        <p>{project.applications.join(', ')}</p>
                    </aside>
                )}
                {project.links && (
                    <aside>
                        <h4 className="text-xl font-semibold">{__('project.links')}</h4>
                        <ul>
                            {project.links.map((link) => (
                                <li key={uuid()}>
                                    <Link href={link.href}>
                                        <a className="block truncate">{link.name}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
            </div>
        </article>
    )
}