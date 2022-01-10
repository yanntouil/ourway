import { useEffect, useRef } from 'react'



/**
 * useEventListener
 * ? Usage : useEventListener('scroll', onScroll)
 * ?         useEventListener('click', onClick, buttonRef)
 * @param {WindowEventMap|string} eventName string to allow custom event
 * @param {Function} handler 
 * @param {RefObject} element 
 */
export default function useEventListener(eventName, handler, element) {
    const savedHandler = useRef() // Create a ref that stores handler
  
    useEffect(() => {
      const targetElement = element || window // Define the listening target
      if (!(targetElement && targetElement.addEventListener)) return
      if (savedHandler.current !== handler) savedHandler.current = handler // Update saved handler if necessary
      const eventListener = (event) => { // Create event listener that calls handler function stored in ref
        if (!!savedHandler?.current) savedHandler.current(event)
      }
      targetElement.addEventListener(eventName, eventListener)
      return () => targetElement.removeEventListener(eventName, eventListener) // Remove event listener on cleanup
    }, [eventName, element, handler])
}
