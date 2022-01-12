import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
// Components
import Main from 'components/layout/Main'
import { SectionTitle } from 'components/ui/Section'
import Markdown from 'components/ui/Markdown'
// Images
import coverImg from 'assets/images/privacy-policy/cover.jpg'

export default function PrivacyPolicy() {
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pagePrivacy')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])
    return (
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
                    <SectionTitle>{__('title')}</SectionTitle>
                    <div>
                        <Markdown>{__('privacy-policy')}</Markdown>
                    </div>
                </div>
            </section>
        </Main>
    )
}
