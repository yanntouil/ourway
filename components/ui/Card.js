/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'
import { className } from 'app/helpers'

/**
 * Display a card
 * @param {Object} props
 */
export default function Card(props) {
    const motionCard = {
        variants: {
            initial: {opacity: 0},
            animate: {opacity: 1},
            exit: {opacity: 0},
        },
    }
    return (
        <motion.div {...props} {...motionCard} className={className([
            'group flex flex-col rounded select-none',
            'bg-white dark:bg-secondary-800',
            'shadow-lg hover:shadow-xl shadow-secondary-600 hover:shadow-secondary-600 dark:shadow-black hover:dark:shadow-black',
            'transition-all duration-500',
            'hover:transform hover:scale-105',
            props.className ?? '',
        ])} />
    )
}

/**
 * Add a random rotate animation on card component
 * @param {Object} props
 */
export function CardRotate(props) {
    const random = useRef(Math.random() > .4)
    return (
        <Card {...props} className={className([
            props.className ?? '',
            random.current ? 'hover:rotate-3' : 'hover:-rotate-3',
        ])} />
    )
}

/**
 * Display a card
 * @param {Object} props
 */
export function CardHeader(props) {
    return (
        <div {...props} className={className([
            'flex px-4 gap-4',
            props.className ?? '',
        ])} />
    )
}

/**
 * Display an icon in card header
 * @param {Object} props
 */
export function CardHeaderIcon(props) {
    return (
        <div {...props} className={className([
            'shrink-0 flex justify-center items-center w-12 h-12 rounded-full',
            props.className ?? '',
        ])} />
    )
}

/**
 * Display a title and secondary title in card header
 * @param {{title: String, secondary: String }} props
 */
export function CardHeaderTitle({ title = '', secondary = '' }) {
    return (
        <div className="flex flex-col">
            <h3 className="-mt-1 text-xl font-medium leading-normal">{title}</h3>
            <p className="text-sm font-light leading-tight">{secondary}</p>
        </div>

    )
}

/**
 * Display a heading image in card
 * @param {{src: Object }} props
 */
export function CardImage({ src, img, alt = '' }) {
    return (
        <div className="relative aspect-[16/9] rounded-t overflow-hidden">
            {src && (<Image src={src} alt={alt} layout="fill" objectFit="cover" priority={true} className="transition-transform duration-500 group-hover:transform group-hover:scale-125" />)}
            {img && (<img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:transform group-hover:scale-125" />)}
        </div>
    )
}

/**
 * Display a floating button in card
 * @param {Object} props
 */
export function CardFloatingButton(props) {
    return (
        <button type="button" {...props} className={className([
            'absolute flex justify-center items-center w-12 h-12 rounded-full bg-white/10',
            props.className ?? '',
        ])} />
    )
}

/**
 * Display content in card
 * @param {{className: String }} props
 */
export function CardContent(props) {
    return (
        <div {...props} className={className([
            'px-4 grow',
            props.className ?? '',
        ])} />
    )
}

/**
 * Display a colored bottom inside a card
 * @param {{className: String }} props
 */
export function CardColoredBottom(props) {
    return (
        <div aria-hidden="true" {...props} className={className([
            'h-2 rounded-b',
            props.className ?? '',
        ])} />
    )
}

/**
 * Display a cards grid
 * @param {{className: String }} props
 */
 export function Cards(props) {
    const motionSection = {
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        variants: {
            animate: {
                transition: { staggerChildren: 0.3 }
            }
        },
    }
    return (
        <motion.section {...motionSection} {...props} className={className([
            'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-16 mx-4 sm:mx-8 lg:mx-16',
            props.className ?? '',
        ])} />
    )
}

