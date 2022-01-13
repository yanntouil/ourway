import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
import config from 'app/config'
// Components
import Main from 'components/layout/Main'
// Images
import Error404Svg from 'assets/images/404/error-404.svg'
import { SectionSecondary, SectionTitle } from 'components/ui/Section'

export default function Error404() {
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('page404')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])

    return (
        <>
            <NextSeo
                openGraph={{
                    title: `${config.sitename} | ${__('page-title')}`,
                    description: __('page-description'),
                    images: [{url: `${config.siteurl}/images/404/opengraph.jpg`, width: 1200, height: 630, alt: __('page-title') }]
                }}
            />
            <Main noPaddingTop  >
                <div className="relative max-w-7xl mx-auto mt-16 sm:mt-24 xl:mt-4">
                    <Error404Svg />
                    <div className="absolute right-0 sm:right-1/4 bottom-0 left-0 sm:left-1/4 flex justify-center h-1/4 sm:pt-4 text-center font-gochi-hand text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
                        {__('message-404')}
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-8">
                    <SectionTitle heading={1}>{__('title')}</SectionTitle>
                    <SectionSecondary>{__('secondary')}</SectionSecondary>
                </div>
            </Main>
        </>
    )
}
