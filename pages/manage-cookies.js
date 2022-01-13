import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
import config from 'app/config'
// Components
import Main from 'components/layout/Main'
import { SectionSecondary, SectionTitle } from 'components/ui/Section'
// Images
import UnderconstructionSvg from 'assets/images/underconstruction.svg'

export default function ManageCookies() {
    /**
     * Page settings
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageCookies')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])

    /**
     * Render
     */
    return (
        <>
            <NextSeo
                openGraph={{
                    title: `${config.sitename} | ${__('page-title')}`,
                    description: __('page-description'),
                    images: [{url: `${config.siteurl}/images/portfolio/opengraph.jpg`, width: 1200, height: 630, alt: __('page-title') }]
                }}
            />
            <Main>
                <div className="max-w-7xl mx-auto mt-8">
                    <SectionTitle heading={1}>{__('title')}</SectionTitle>
                    <SectionSecondary>{__('secondary')}</SectionSecondary>
                </div>
                <div className="relative max-w-7xl mx-auto mt-16 sm:mt-24">
                    <UnderconstructionSvg className="" />
                </div>
            </Main>
        </>
    )
}