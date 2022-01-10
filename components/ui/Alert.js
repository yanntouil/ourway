import React, { createContext, useCallback, useEffect, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll, clearScrollLocks, className } from 'app/helpers'
import { AnimatePresence, motion } from 'framer-motion'
/**
 * Create context
 */
export const AlertContext = createContext()

/**
 * Diplay an alert
 */
export default function Alert({ children, show, setShow, escape = true, scrollLock = true, overlay = true, closeOnOverlay = true }) {
    /**
     * References
     */
    const ref = useRef(null)
    
    /**
     * Manage keyboard interaction
     * @param {SyntheticBaseEvent} e 
     */
    const handelKeydown = useCallback((e) => {
        if (e.key === 'Escape') return setShow(false)
    }, [setShow])
    // Focus first element focusable
    useEffect(() => {
        if (show) {
            ref.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0].focus()
            if (escape) document.addEventListener('keydown', handelKeydown)
            if (scrollLock) disableBodyScroll()
        } else {
            if (escape) document.removeEventListener('keydown', handelKeydown)
            if (scrollLock) {
                setTimeout(enableBodyScroll, 300)
            }
        }
        return () => {
            if (escape) document.removeEventListener('keydown', handelKeydown)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])

    /**
     * Render
     */
    return (
        <AnimatePresence exitBeforeEnter>
            {show && (
                <AlertContext.Provider value={{ show, setShow }}>
                    <div 
                        className="fixed z-50 inset-0 overflow-y-auto" 
                        aria-labelledby="alert-title"
                        role="dialog" 
                        aria-modal="true" 
                        ref={ref}
                    >
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            {overlay && (
                                <motion.div // Overlay
                                    className="fixed inset-0 bg-primary-900/50 backdrop-blur-sm  transition-opacity" 
                                    aria-hidden="true"
                                    onClick={() => { if (closeOnOverlay) setShow(false) }}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={{
                                        initial: {opacity: 0},
                                        animate: {opacity: 1},
                                        exit: {opacity: 0},
                                    }}
                                    transition={{ duration: .2 }}
                                />
                            )}
                            <span 
                                className="hidden sm:inline-block sm:align-middle sm:h-screen" 
                                aria-hidden="true"
                            >&#8203;</span>
                            <motion.div 
                                className="relative inline-block align-bottom bg-white dark:bg-secondary-800 rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={{
                                    initial: { scale: 0 },
                                    animate: { scale: 1 },
                                    exit: { scale: 0 },
                                }}
                                transition={{ duration: .2 }}
                        >
                                {children}
                            </motion.div>
                        </div>
                    </div>
                </AlertContext.Provider>
            )}
        </AnimatePresence>
    )
}

/**
 * Display alert content
 */
export function AlertContent({ children }) {
    
    return (
        <div className="flex flex-col gap-4 px-8">
            {children}
        </div>
    )
}

/**
 * Display alert content icon
 */
 export function AlertContentIcon(props) {
    const color = props.color ?? 'primary'
    return (
        <div className="flex justify-center items-center">
            <div className={className([
                props.className ?? '',
                'flex justify-center items-center h-32 w-32 shrink-0 -mt-16 rounded-full  border-8 border-white dark:border-secondary-800 text-white',
                `bg-${color}-500 dark:bg-${color}-800`,
            ])}>
                {props.children}
            </div>
        </div>
    )
}

/**
 * Display alert content title
 */
 export function AlertContentTitle(props) {
    return (
        <h3 
            {...props}
            id="alert-title"
            className={className([
                props.className ?? '',
                'text-3xl leading-6 font-semibold text-secondary-900 dark:text-white',
            ])}
        />
    )
}