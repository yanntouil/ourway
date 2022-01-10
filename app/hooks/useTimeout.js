import { useEffect, useRef } from 'react'



/**
 * useTimeout
 * ? Usage : useTimeout(hide, 5000)
 * @param {Function} callback 
 * @param {number|null} delay 
 */
export default function useTimeout(callback, delay) {
    const savedCallback = useRef(callback)

    useEffect(() => { // Remember the latest callback if it changes
        savedCallback.current = callback
    }, [callback])
  
    useEffect(() => { // Set up the timeout
      if (!delay && delay !== 0) return // Don't schedule if no delay is specified (0 is a valid value)
      const id = setTimeout(() => savedCallback.current(), delay)
      return () => clearTimeout(id)
    }, [delay])
}