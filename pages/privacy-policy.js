import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
import config from 'app/config'
// Components
import Main from 'components/layout/Main'
import { SectionTitle } from 'components/ui/Section'
import Markdown from 'components/ui/Markdown'
// Images
import coverImg from 'assets/images/privacy-policy/cover.jpg'


/**
 * Page of privacy policy
 */
export default function PrivacyPolicy() {
    /**
     * Page settings
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pagePrivacy')
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
                    images: [{url: `${config.siteurl}/images/privacy-policy/opengraph.jpg`, width: 1200, height: 630, alt: __('page-title') }]
                }}
            />
            <Main noPaddingX noPaddingTop>
                <section>
                    <div className="relative h-80">
                        <Image 
                                src={coverImg} 
                                layout="fill"
                                objectFit="cover"
                                priority={true}
                                alt={__('title')} 
                            />
                    </div>
                    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-8 lg:px-16">
                        <SectionTitle heading={1}>{__('title')}</SectionTitle>
                        <div>
                            <Markdown>{__('privacy-policy')}</Markdown>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    )
}
