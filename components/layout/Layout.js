import React from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import { layoutSelector } from 'app/reducers/layout/layoutSelectors'
import { useResponsive } from 'app/hooks'

// Components
import Header from 'components/layout/Header'
import BigBubbles from 'components/ui/BigBubbles'
import Bubbles from 'components/ui/Bubbles'
import Footer from './Footer'
import ScrollTop from './ScrollTop'




export default function Layout({ children }) {
    /**
     * Hooks
     */
    const { pageTitle } = useSelector(layoutSelector)
    const media = useResponsive()

    /**
     * Render
     */
    return (
        <>  
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Header />
            {/* {media.min('lg') && <Bubbles />}
            {media.min('sm') && <BigBubbles />} */}
            {children}
            <Footer />
            {/* <div className="fixed bottom-4 right-4 z-50 px-8 py-2 rounded-full bg-primary-500/50 text-white">
                Media: {media.breakpoint()}
            </div>
            <ScrollTop /> */}
        </>
    )
}
