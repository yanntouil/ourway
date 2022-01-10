import React from 'react'

export default function Polaroid({ className, children }) {
    return (
        <div className={`flex flex-col w-32 pt-2 pr-2 pl-2  shadow-lg bg-white ${className}`}>
            {children}
        </div>
    )
}

export function PolaroidPicture({ children }) {
    return (
        <div className="relative w-28 h-28">
            {children}
        </div>
    )
}
export function PolaroidHeader({ children }) {
    return (
        <h3 className="text-lg text-center font-handwriting text-secondary-800">
            {children}
        </h3>
    )
}
