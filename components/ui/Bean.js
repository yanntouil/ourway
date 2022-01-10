import React from 'react'





/**
 * Diplay an animated bean container
 */
export default function Bean({ children }) {

    /**
     * SVG Path use fo animation
     */
    const frames = {
        '0%': 'M232.77.34C375.12-7,499.5,106.27,468.23,186.89,414.08,326.51,636.52,394.51,350.5,484.11,153.67,545.77,46.6,417.54,10.19,278.59-35.8,103.1,80.09,8.25,232.77.34Z',
        '25%': 'M234.71,7.37c151.44,19.52,242.9,105.5,233.68,180.72-18.54,151.35,137.37,209.78-110,292.34C153.52,548.79,9.59,427.38.9,281.42-9.81,101.68,75.52-13.16,234.71,7.37Z',
        '50%': 'M287,9c86,8,175.92,135.38,166,201-13,86,78.35,218.45-88,264C197,520,23.46,428,15,282,7,144,127.18-5.87,287,9Z',
        '75%': 'M287,9C444.13,28.44,474.34,141.22,485,206c14.12,85.82,40.35,237.45-126,283C191,535,17.46,350,9,204,1,66,127.7-10.71,287,9Z',
        '100%': 'M232.77.34C375.12-7,499.5,106.27,468.23,186.89,414.08,326.51,636.52,394.51,350.5,484.11,153.67,545.77,46.6,417.54,10.19,278.59-35.8,103.1,80.09,8.25,232.77.34Z',
    }

    //const keyframes = Object.entries(frames).map((frame) => `${frame[0]} { d: path('${frame[1]}');}`).join(' ')

    /**
     * Render
     */
    return (
        <>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" aria-hidden="true">
                <defs>
                    <clipPath id="clipPathBean">
                        <path className="animatedBean" d={frames['0%']} />
                    </clipPath>
                </defs>
            </svg>
            <div className="relative w-[500px] h-[500px]" style={{clipPath: 'url(#clipPathBean)'}} aria-hidden="true">
                {children}
            </div>
            <style jsx>{`
                @keyframes animateBean {
                    0% { d: path('${frames['0%']}'); }
                    25% { d: path('${frames['25%']}'); }
                    50% { d: path('${frames['50%']}'); }
                    75% { d: path('${frames['75%']}'); }
                    100% { d: path('${frames['100%']}'); }
                }
                .animatedBean {
                    animation: animateBean 12s linear infinite alternate;
                    animation-fill-mode: forwards;
                }
            `}</style>
        </>
    )
}
