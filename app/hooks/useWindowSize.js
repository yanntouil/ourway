import { useEffect, useState } from 'react'
import { useEventListener } from '.'


/**
 * useWindowSize
 * @returns {{width: number, height: number}}
 */
export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })
    const handleSize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
    }
    useEventListener('resize', handleSize)

    useEffect(() => {
        handleSize()
    }, [])

    return windowSize
}