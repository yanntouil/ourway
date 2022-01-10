import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
// Components
import Main from 'components/layout/Main'
import { SectionSecondary, SectionTitle } from 'components/ui/Section'
// Images
import UnderconstructionSvg from 'assets/images/underconstruction.svg'

export default function ManageCookies() {
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageCookies')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])
    return (
        <Main>
            <div className="max-w-7xl mx-auto mt-8">
                <SectionTitle>{__('title')}</SectionTitle>
                <SectionSecondary>{__('secondary')}</SectionSecondary>
            </div>
            <div className="relative max-w-7xl mx-auto mt-16 sm:mt-24">
                <UnderconstructionSvg className="" />
            </div>
        </Main>
    )
}
/*
https://osmoz.lu/politique-de-cookies-eu/
*/