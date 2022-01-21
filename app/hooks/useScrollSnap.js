import { useState, useRef } from 'react'
import { useEventListener } from '.';


/**
 * 
 * @param {*} references 
 */
export default function useScrollSnap() {

     const sectionRef = useRef([])
     const [sectionIndex, setSectionIndex] = useState(0)
     const onScroll = (e) => {
        const snapConfidenceThreshold = window.innerHeight / 4
        sectionRef.current.forEach((el, index) => {
            if (el.offsetTop - snapConfidenceThreshold < window.scrollY && el.offsetTop + snapConfidenceThreshold > window.scrollY) {
                if (sectionIndex !== index) window.scrollTo(0, el.offsetTop)// To don't force scroll
                setSectionIndex(index)
            }
        })
    }
    useEventListener('scroll', onScroll)
    return sectionRef
}