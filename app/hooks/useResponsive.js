import { useWindowSize } from '.'


/**
 * useResponsive
 * @returns {{min: Function, max: Function, between: Function, between: breakpoint}}
 */
export default function useResponsive() {
    const windowSize = useWindowSize()
    return {
        min: (breakpoint) => windowSize.width > breakpoints[breakpoint],
        max: (breakpoint) => windowSize.width < breakpoints[breakpoint],
        between: (breakpoint1, breakpoint2) => windowSize.width > breakpoints[breakpoint1] && windowSize.width < breakpoints[breakpoint2],
        breakpoint: () => Object.entries(breakpoints).reverse().find((breakpoint) => breakpoint[1] <= windowSize.width)[0],
    }
}

const breakpoints = {
    'xs': 0,
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
}