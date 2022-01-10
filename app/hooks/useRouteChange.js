import { useEffect, useRef } from 'react'
import { useRouter } from "next/router"


/**
 * useRouteChange
 * @param {Function} callback 
 */
export default function useRouteChange(callback) {
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeStart', callback)
        return () => router.events.off('routeChangeStart', callback)
    }, [])
}
