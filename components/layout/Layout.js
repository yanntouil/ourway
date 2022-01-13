/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { layoutSelector } from 'app/reducers/layout/layoutSelectors'
import { useResponsive } from 'app/hooks'

// Components
import Header from 'components/layout/Header'
import BigBubbles from 'components/ui/BigBubbles'
import Bubbles from 'components/ui/Bubbles'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import config from 'app/config'




export default function Layout({ children }) {
    /**
     * Hooks
     */
    const { pageTitle } = useSelector(layoutSelector)
    const media = useResponsive()
    const router = useRouter()
    // console.log(router)
    /**
     * Render
     */
    return (
        <>  
            <Head>
                <title>{pageTitle}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
            </Head>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: config.translation.locale[config.translation.defaultLanguage].replace('-', '_'),
                    url: config.siteurl + router.asPath,
                    site_name: config.sitename,
                    title: pageTitle,
                    type: 'basic',
                }}
                twitter={{
                    // handle: '@handle',
                    // site: '@site',
                    // cardType: 'summary_large_image',
                }}
            />
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
