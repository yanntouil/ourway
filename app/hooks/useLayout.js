import { useEffect } from 'react'



/**
 * useRouteChange
 * @param {Function} callback 
 */
export default function useRouteChange(pageTitle, pageMenu, pageLogo) {

    useEffect(() => {
        router.events.on('routeChangeStart', callback)
        return () => router.events.off('routeChangeStart', callback)
    }, [])
}