import { useEffect, useLayoutEffect, useRef } from 'react'



/**
 * useInterval
 * ? Usage : useInterval(() => setCount(count + 1), 5000)
 * @param {Function} callback 
 * @param {number|null} delay 
 */
export default function useInterval(callback, delay) {
    const savedCallback = useRef(callback)
  
    useEffect(() => { // Remember the latest callback if it changes
      savedCallback.current = callback
    }, [callback])
  
    useEffect(() => {// Set up the interval
      if (!delay && delay !== 0) return // Don't schedule if no delay is specified (0 is a valid value)
      const id = setInterval(() => savedCallback.current(), delay)
      return () => clearInterval(id)
    }, [delay])
}
