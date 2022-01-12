import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { animate, AnimationOptions, motion, MotionStyle, PanInfo, useMotionValue, useAnimation, useTransform, AnimatePresence } from 'framer-motion'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
import useScrollSnap from 'app/hooks/useScrollSnap'

// Components
import Main from 'components/layout/Main'
import Polaroid, {PolaroidHeader, PolaroidPicture} from 'components/ui/Polaroid'
import BoxWild, { BoxWildImage, BoxWildBody} from 'components/ui/BoxWild'
import Section, { SectionTitle, SectionSecondary} from 'components/ui/Section'
import BoxIcon, { BoxIconTitle, BoxIconContent } from 'components/ui/BoxIcon'
import BoxCard, { BoxCardTitle, BoxCardContent, BoxCardBorder } from 'components/ui/BoxCard'
import HoveredCube, { HoveredCubeContent } from 'components/ui/HoveredCube'
import Markdown from 'components/ui/Markdown'

// Images
import frontendImg from 'assets/images/skills/frontend-background.jpg'
import integrationImg from 'assets/images/skills/integration-banner.jpg'
import laravelImg from 'assets/images/skills/laravel-banner.png'
import nodeImg from 'assets/images/skills/node-banner.png'
import figmaImg from 'assets/images/skills/figma-polaroid.jpg'
import photoshopImg from 'assets/images/skills/photoshop-polaroid.jpg'
import illustratorImg from 'assets/images/skills/illustrator-polaroid.png'
import xdImg from 'assets/images/skills/xd-polaroid.jpg'
import indesignImg from 'assets/images/skills/indesign-polaroid.jpg'
// Icons
import PowerOffIcon from 'assets/images/icons/regular/power-off.svg'
import LightbulbOnIcon from 'assets/images/icons/light/lightbulb-on.svg'
import ClipboardListCheckIcon from 'assets/images/icons/light/clipboard-list-check.svg'
import MugHotIcon from 'assets/images/icons/light/mug-hot.svg'
import UsersIcon from 'assets/images/icons/light/users.svg'
import BracketsCurlyIcon from 'assets/images/icons/light/brackets-curly.svg'
import LemonIcon from 'assets/images/icons/light/lemon.svg'
import CircleIcon from 'assets/images/icons/light/circle.svg'


/**
 * Page Skills
 */
export default function Skills() {
    /**
     * Page settings
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageSkills')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])

    /**
     * Render
     */
    return (
        <Main noPaddingX noPaddingTop>
            <h1 className="sr-only">{__('title')}</h1>

            {/* Integration */}
            <Section id="integration">
                <div className="relative flex flex-col justify-center" style={{minHeight: 'calc(100vh - 3rem)'}}>
                    {/* Background */}
                    <div className="absolute inset-0 grid grid-rows-2">
                        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 sm:grid-rows-6 lg:grid-rows-3 h-full gap-8 p-8 bg-primary-600 dark:bg-secondary-700">
                            <div className="col-span-2 lg:col-span-3 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="row-span-2  bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="col-span-2 sm:col-span-3 row-span-3 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="sm:col-span-2 row-span-2 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="col-span-2 row-span-2 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="row-span-2 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="col-span-2 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="row-span-2 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="col-span-2 lg:col-span-3 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="col-span-2 bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="bg-primary-500 dark:bg-secondary-800"></div>
                            <div className="col-span-2 sm:col-span-3 lg:col-span-1 bg-primary-500 dark:bg-secondary-800"></div>
                        </div>
                        <div className="relative h-full bg-gray-800">
                            <Image src={integrationImg} layout="fill" objectFit="cover" priority={true} alt="Integration" />
                        </div>
                    </div>
                    {/* Content */}
                    <div className="relative w-full max-w-7xl py-16 px-4 sm:px-8 lg:px-16 mx-auto">
                        <SectionTitle className="text-white border-b-white"># {__('integration.title')}</SectionTitle>
                        <SectionSecondary className="text-white">{__('integration.secondary')}</SectionSecondary>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <BoxCard className="bg-white/90 dark:bg-secondary-900/90">
                                <BoxCardTitle>{__('integration.html-css.title')}</BoxCardTitle>
                                <BoxCardContent>{__('integration.html-css.content')}</BoxCardContent>
                            </BoxCard>
                            <BoxCard className="bg-white/90 dark:bg-secondary-900/90">
                            <BoxCardTitle>{__('integration.cms.title')}</BoxCardTitle>
                                <BoxCardContent>{__('integration.cms.content')}</BoxCardContent>
                            </BoxCard>
                            <BoxCard className="bg-white/90 dark:bg-secondary-900/90">
                            <BoxCardTitle>{__('integration.accessibility.title')}</BoxCardTitle>
                                <BoxCardContent>{__('integration.accessibility.content')}</BoxCardContent>
                            </BoxCard>
                            <BoxCard className="bg-white/90 dark:bg-secondary-900/90">
                                <BoxCardTitle className="flex items-center">SE<PowerOffIcon className="w-5 h-5 fill-current"/></BoxCardTitle>
                                <BoxCardContent>{__('integration.seo.content')}</BoxCardContent>
                            </BoxCard>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Design */}
            <Section id="design">
                <div className="flex flex-col justify-center w-full max-w-7xl py-16 px-4 sm:px-8 lg:px-16 mx-auto" style={{minHeight: 'calc(100vh - 3rem)'}}>
                    <SectionTitle># {__('design.title')}</SectionTitle>
                    <SectionSecondary>{__('design.secondary')}</SectionSecondary>
                    {/* Tiny cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-10">
                        <BoxCard className="transition-transform duration-500 hover:transform hover:scale-105">
                            <BoxCardTitle>{__('design.mockup.title')}</BoxCardTitle>
                            <BoxCardContent>{__('design.mockup.content')}</BoxCardContent>
                            <BoxCardBorder className="bg-pink-500"></BoxCardBorder>
                        </BoxCard>
                        <BoxCard className="transition-transform duration-500 hover:transform hover:scale-105">
                            <BoxCardTitle>{__('design.graphic-design.title')}</BoxCardTitle>
                            <BoxCardContent>{__('design.graphic-design.content')}</BoxCardContent>
                            <BoxCardBorder className="bg-orange-500"></BoxCardBorder>
                        </BoxCard>
                        <BoxCard className="transition-transform duration-500 hover:transform hover:scale-105">
                            <BoxCardTitle>{__('design.flyer.title')}</BoxCardTitle>
                            <BoxCardContent>{__('design.flyer.content')}</BoxCardContent>
                            <BoxCardBorder className="bg-rose-500 h-2"></BoxCardBorder>
                        </BoxCard>
                        <BoxCard className="transition-transform duration-500 hover:transform hover:scale-105">
                            <BoxCardTitle>{__('design.print.title')}</BoxCardTitle>
                            <BoxCardContent>{__('design.print.content')}</BoxCardContent>
                            <BoxCardBorder className="bg-lime-500"></BoxCardBorder>
                        </BoxCard>
                        <BoxCard className="transition-transform duration-500 hover:transform hover:scale-105">
                            <BoxCardTitle>{__('design.photo-retouching.title')}</BoxCardTitle>
                            <BoxCardContent>{__('design.photo-retouching.content')}</BoxCardContent>
                            <BoxCardBorder className="bg-blue-500"></BoxCardBorder>
                        </BoxCard>
                        <div className="flex justify-center items-center gap-4 p-8 text-secondary-600 dark:text-white">
                            <CircleIcon className="w-10 h-10 fill-current animate-[bounce_500ms_ease-in-out_infinite]" />
                            <CircleIcon className="w-9 h-9 fill-current animate-[bounce_600ms_ease-in-out_infinite]" />
                            <CircleIcon className="w-8 h-8 fill-current animate-[bounce_700ms_ease-in-out_infinite]" />
                        </div>
                    </div>
                    {/* Polaroids */}
                    <div className="flex justify-center flex-wrap gap-16">
                        <div className="transition-transform duration-500 transform rotate-6 hover:-rotate-0">
                            <Polaroid>
                                <PolaroidPicture>
                                    <Image src={photoshopImg} layout="fill" objectFit="cover" alt="Photoshop" />
                                    <svg className="absolute top-2 left-2 w-6 h-6" viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" width="2500" height="2438"><path d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" fill="#001e36"/><path fill="#31a8ff" d="M54 164.1V61.2c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.2s5.6-.1 8.7-.2 6.1-.1 9.1-.1c8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3s-9.6 9.8-16.1 12.2c-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-.1s-2.4-.1-4.3-.1V164c.1.7-.4 1.3-1.1 1.4H55.2c-.8 0-1.2-.4-1.2-1.3zm21.8-84.7V113c1.4.1 2.7.2 3.9.2H85c3.9 0 7.8-.6 11.5-1.8 3.2-.9 6-2.8 8.2-5.3 2.1-2.5 3.1-5.9 3.1-10.3.1-3.1-.7-6.2-2.3-8.9-1.7-2.6-4.1-4.6-7-5.7-3.7-1.5-7.7-2.1-11.8-2-2.6 0-4.9 0-6.8.1-2-.1-3.4 0-4.1.1zM192 106.9c-3-1.6-6.2-2.7-9.6-3.4-3.7-.8-7.4-1.3-11.2-1.3-2-.1-4.1.2-6 .7-1.3.3-2.4 1-3.1 2-.5.8-.8 1.8-.8 2.7s.4 1.8 1 2.6c.9 1.1 2.1 2 3.4 2.7 2.3 1.2 4.7 2.3 7.1 3.3 5.4 1.8 10.6 4.3 15.4 7.3 3.3 2.1 6 4.9 7.9 8.3 1.6 3.2 2.4 6.7 2.3 10.3.1 4.7-1.3 9.4-3.9 13.3-2.8 4-6.7 7.1-11.2 8.9-4.9 2.1-10.9 3.2-18.1 3.2-4.6 0-9.1-.4-13.6-1.3-3.5-.6-7-1.7-10.2-3.2-.7-.4-1.2-1.1-1.1-1.9v-17.4c0-.3.1-.7.4-.9s.6-.1.9.1c3.9 2.3 8 3.9 12.4 4.9 3.8 1 7.8 1.5 11.8 1.5 3.8 0 6.5-.5 8.3-1.4 1.6-.7 2.7-2.4 2.7-4.2 0-1.4-.8-2.7-2.4-4s-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2-3.1-2.2-5.7-5.1-7.6-8.5-1.6-3.2-2.4-6.7-2.3-10.2 0-4.3 1.2-8.4 3.4-12.1 2.5-4 6.2-7.2 10.5-9.2 4.7-2.4 10.6-3.5 17.7-3.5 4.1 0 8.3.3 12.4.9 3 .4 5.9 1.2 8.6 2.3.4.1.8.5 1 .9.1.4.2.8.2 1.2v16.3c0 .4-.2.8-.5 1-.9.2-1.4.2-1.8 0z"/></svg>
                                </PolaroidPicture>
                                <PolaroidHeader>Photoshop</PolaroidHeader>
                            </Polaroid>
                        </div>
                        <div className="transition-transform duration-500 transform -rotate-15 hover:-rotate-0">
                            <Polaroid>
                                <PolaroidPicture>
                                    <Image src={illustratorImg} layout="fill" objectFit="cover" alt="Illustrator" />
                                    <svg className="absolute top-2 left-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 240 234"><path fill="#330000" d="M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149 C0,19,19,0,42.5,0z"/><path fill="#FF9A00" d="M116.3,140.4H79.1l-7.6,23.5c-0.2,0.9-1,1.5-1.9,1.4H50.8c-1.1,0-1.4-0.6-1.1-1.8l32.2-92.7 c0.3-1,0.6-2.1,1-3.3c0.4-2.1,0.6-4.3,0.6-6.5c-0.1-0.5,0.3-1,0.8-1.1c0.1,0,0.2,0,0.3,0h25.6c0.8,0,1.2,0.3,1.3,0.8l36.5,103 c0.3,1.1,0,1.6-1,1.6h-20.9c-0.7,0.1-1.4-0.4-1.6-1.1L116.3,140.4z M84.9,120.1h25.4c-0.6-2.1-1.4-4.6-2.3-7.2 c-0.9-2.7-1.8-5.6-2.7-8.6c-1-3.1-1.9-6.1-2.9-9.2c-1-3.1-1.9-6-2.7-8.9c-0.8-2.8-1.5-5.4-2.2-7.8h-0.2c-0.9,4.3-2,8.6-3.4,12.9 c-1.5,4.8-3,9.8-4.6,14.8C87.9,111.2,86.4,115.9,84.9,120.1L84.9,120.1z" /><path fill="#FF9A00" d="M169.8,77c-3.3,0.1-6.5-1.2-8.9-3.5c-2.3-2.5-3.5-5.8-3.4-9.2c-0.1-3.4,1.2-6.6,3.6-8.9 c2.4-2.3,5.6-3.5,8.9-3.5c3.9,0,6.9,1.2,9.1,3.5c2.2,2.4,3.4,5.6,3.3,8.9c0.1,3.4-1.1,6.7-3.5,9.2 C176.6,75.9,173.2,77.2,169.8,77z M158.6,163.8v-77c0-1,0.4-1.4,1.3-1.4h19.8c0.9,0,1.3,0.5,1.3,1.4v77c0,1.1-0.4,1.6-1.3,1.6 h-19.6C159.1,165.4,158.6,164.8,158.6,163.8z" /></svg>
                                </PolaroidPicture>
                                <PolaroidHeader>Illustrator</PolaroidHeader>
                            </Polaroid>
                        </div>
                        <div className="transition-transform duration-500 transform rotate-10 hover:-rotate-0">
                            <Polaroid>
                                <PolaroidPicture>
                                    <Image src={indesignImg} layout="fill" objectFit="cover" alt="InDesign" />
                                    <svg className="absolute top-2 left-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect fill="#49021f" x="8" y="4" width="240" height="234" rx="42.5"/><path fill="#f36" d="M95.1582,65.21631V167.77319q0,1.61133-1.44873,1.61011H74.228q-1.28981,0-1.2876-1.61011V65.21631q0-1.28686,1.44873-1.28809h19.481A1.13916,1.13916,0,0,1,95.1582,65.21631Z"/><path fill="#f36" d="M152.79639,170.99341a49.88223,49.88223,0,0,1-21.49366-4.50806,34.17219,34.17219,0,0,1-15.05322-13.60449q-5.47559-9.09411-5.47412-22.78149a42.04123,42.04123,0,0,1,5.47412-21.09107,40.1871,40.1871,0,0,1,15.939-15.45605q10.46337-5.796,25.27685-5.7959.80347,0,2.09278.08056,1.28687.08277,3.05908.24146v-31.717c0-.74976.32226-1.127.96631-1.127h20.28564a.854.854,0,0,1,.96631.96582v95.15112q0,2.73962.24121,5.957.24169,3.22228.40283,5.7959a1.66418,1.66418,0,0,1-.96631,1.61011,79.86,79.86,0,0,1-16.26074,4.82983A87.29931,87.29931,0,0,1,152.79639,170.99341Zm9.8208-19.96411V107.07642a15.97072,15.97072,0,0,0-2.65625-.48316,32.10968,32.10968,0,0,0-3.30078-.16089,24.86085,24.86085,0,0,0-11.27,2.57593,22.00524,22.00524,0,0,0-8.45215,7.406q-3.30176,4.83-3.30078,12.719a28.39124,28.39124,0,0,0,1.69043,10.304,19.58772,19.58772,0,0,0,4.5083,7.084,17.16656,17.16656,0,0,0,6.76172,4.02515,26.49038,26.49038,0,0,0,8.2915,1.28784q2.25293,0,4.186-.16089A17.23154,17.23154,0,0,0,162.61719,151.0293Z"/></svg>
                                </PolaroidPicture>
                                <PolaroidHeader>InDesign</PolaroidHeader>
                            </Polaroid>
                        </div>
                        <div className="transition-transform duration-500 transform -rotate-10 hover:-rotate-0">
                            <Polaroid>
                                <PolaroidPicture>
                                    <Image src={xdImg} layout="fill" objectFit="cover" alt="Xd" />
                                    <svg className="absolute top-2 left-2 w-6 h-6" viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" width="2500" height="2438"><path d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" fill="#470137"/><path fill="#ff61f6" d="M126.2 61.5l-30 49.5 32 52.5c.2.4.3.8.2 1.2s-.5.1-1.1.2h-22.9c-1.6 0-2.7-.1-3.4-1.1-2.1-4.2-4.3-8.3-6.4-12.5-2.1-4.1-4.4-8.3-6.8-12.6s-4.8-8.6-7.2-13h-.2c-2.1 4.3-4.4 8.6-6.7 12.9s-4.6 8.6-6.8 12.8c-2.3 4.2-4.6 8.5-6.9 12.6-.4 1-1.2 1.1-2.3 1.1h-22c-.4 0-.7.2-.7-.3-.1-.4 0-.8.2-1.1l31.1-51L36 61.4c-.3-.4-.4-.8-.2-1 .2-.3.6-.4 1-.4h22.7c.5 0 1 .1 1.4.2.4.2.7.5 1 .9 1.9 4.3 4.1 8.6 6.4 12.9 2.4 4.3 4.7 8.5 7.2 12.7 2.4 4.2 4.6 8.4 6.7 12.7h.2c2.1-4.4 4.3-8.7 6.5-12.9s4.5-8.4 6.8-12.6 4.5-8.5 6.7-12.6c.1-.4.3-.8.6-1 .4-.2.8-.3 1.3-.2h21.1c.5-.1 1 .2 1.1.7.1.1-.1.5-.3.7zM172.4 167c-7.4.1-14.8-1.4-21.5-4.5-6.3-2.9-11.5-7.7-15.1-13.6-3.7-6.1-5.5-13.7-5.5-22.8-.1-7.4 1.8-14.7 5.5-21.1 3.8-6.5 9.3-11.9 15.9-15.5 7-3.9 15.4-5.8 25.3-5.8.5 0 1.2 0 2.1.1s1.9.1 3.1.2V52.4c0-.7.3-1.1 1-1.1h20.3c.5-.1.9.3 1 .7v95.4c0 1.8.1 3.8.2 6 .2 2.1.3 4.1.4 5.8 0 .7-.3 1.3-1 1.6-5.2 2.2-10.7 3.8-16.3 4.8-5.1.9-10.2 1.4-15.4 1.4zm9.8-20v-44c-.9-.2-1.8-.4-2.7-.5-1.1-.1-2.2-.2-3.3-.2-3.9 0-7.8.8-11.3 2.6-3.4 1.7-6.3 4.2-8.5 7.4s-3.3 7.5-3.3 12.7c-.1 3.5.5 7 1.7 10.3 1 2.7 2.5 5.1 4.5 7.1 1.9 1.8 4.2 3.2 6.8 4 2.7.9 5.5 1.3 8.3 1.3 1.5 0 2.9-.1 4.2-.2 1.3.1 2.4-.1 3.6-.5z"/></svg>
                                </PolaroidPicture>
                                <PolaroidHeader>XD</PolaroidHeader>
                            </Polaroid>
                        </div>
                        <div className="transition-transform duration-500 transform rotate-12 hover:-rotate-0">
                            <Polaroid>
                                <PolaroidPicture>
                                    <Image src={figmaImg} layout="fill" objectFit="cover" alt="Figma" />
                                    <div className="absolute top-2 left-2 flex justify-center items-center w-6 h-6">
                                        <svg className="w-5 h-5" height="2500" viewBox="0 0 200 300" width="1667" xmlns="http://www.w3.org/2000/svg"><path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"/><path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"/><path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"/><path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z" fill="#ff7262"/><path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"/></svg>
                                    </div>
                                </PolaroidPicture>
                                <PolaroidHeader>Figma</PolaroidHeader>
                            </Polaroid>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* Frontend */}
            <Section id="frontend">
                <div className="flex flex-col justify-center w-full max-w-7xl py-16 px-4 sm:px-8 lg:px-16 mx-auto" style={{minHeight: 'calc(100vh - 3rem)'}}>
                    <SectionTitle># {__('frontend.title')}</SectionTitle>
                    <SectionSecondary>{__('frontend.secondary')}</SectionSecondary>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:grid-rows-6 lg:grid-rows-4 w-full max-w-7xl mx-auto py-8 gap-8">
                        {/* Vue */}
                        <HoveredCube className="row-span-2 order-1 bg-emerald-600 dark:bg-emerald-700">
                            <div className="flex justify-center items-center w-full h-full transition-transform duration-500 group-hover:transform group-hover:scale-125 group-hover:rotate-12">
                                <svg className="h-32 w-32 mt-5" width="2500" height="2158" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                    <path className="fill-current text-white"/* #41B883 */ d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"/>
                                    <path className="fill-current text-white"/* #41B883 */ d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"/>
                                    <path className="fill-current text-[#35495E]" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"/>
                                </svg>
                            </div>
                            <HoveredCubeContent className="bg-black/50 text-4xl text-white font-bold text-center" from="left">
                                <ul>
                                    <li>Vue</li>
                                    <li>Nuxt</li>
                                </ul>
                            </HoveredCubeContent>
                        </HoveredCube>
                        {/* Main content */}
                        <div className="relative col-span-2 row-span-4 order-3 lg:order-2 md:aspect-square">
                            <Image src={frontendImg} layout="fill" objectFit="cover" priority={true} alt="Laptop" />
                            <div className="relative flex flex-col justify-center h-full overflow-hidden gap-2 p-8 text-white bg-secondary-900/90">
                                <h3 className="text-xl sm:text-xl md:text-3xl lg:text-xl xl:text-2xl font-semibold">{__('frontend.js.title')}</h3>
                                {/* <Markdown className="flex flex-col gap-2 text-xl md:text-2xl lg:text-[1rem] xl:text-xl font-medium leading-8" noProse>{__('frontend.js.content-md')}</Markdown> */}
                                <p className="text-lg sm:text-lg md:text-2xl lg:text-base xl:text-xl font-medium">{__('frontend.js.content-1')}</p>
                                <p className="text-lg sm:text-lg md:text-2xl lg:text-base xl:text-xl font-medium">{__('frontend.js.content-2')}</p>
                                <p className="text-lg sm:text-lg md:text-2xl lg:text-base xl:text-xl font-medium">{__('frontend.js.content-3')}</p>
                            </div>
                        </div>
                        {/* ... */}
                        <div className="order-6 lg:order-3 flex justify-center items-center h-40 sm:h-auto gap-4 bg-secondary-200 dark:bg-secondary-900 text-secondary-600 dark:text-white">
                            <CircleIcon className="w-10 h-10 fill-current animate-[bounce_500ms_ease-in-out_infinite]" />
                            <CircleIcon className="w-9 h-9 fill-current animate-[bounce_600ms_ease-in-out_infinite]" />
                            <CircleIcon className="w-8 h-8 fill-current animate-[bounce_700ms_ease-in-out_infinite]" />
                        </div>
                        {/* Soon */}
                        <div className="order-5 lg:order-4 flex justify-center items-center h-40 sm:h-auto p-4 bg-secondary-200 dark:bg-secondary-900">
                            <span className="text-xl font-medium">{__('frontend.more')}</span>
                        </div>
                        {/* React */}
                        <HoveredCube className="row-span-2 order-2 lg:order-5 bg-sky-600 dark:bg-sky-700">
                            <div className="flex justify-center items-center w-full h-full transition-transform duration-500 group-hover:transform group-hover:scale-125 group-hover:rotate-12">
                                <svg className="h-32 w-32 fill-current text-white" height="2500" viewBox="175.7 78 490.6 436.9" width="2194" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/>
                                    <circle cx="420.9" cy="296.5" r="45.7"/>
                                </svg>
                            </div>
                            <HoveredCubeContent className="bg-black/50 text-3xl text-white font-bold text-center" from="top">
                                <ul>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Next</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </HoveredCubeContent>
                        </HoveredCube>
                        {/* Javascript */}
                        <HoveredCube className="row-span-2 order-4 lg:order-6 bg-yellow-500 dark:bg-yellow-700">
                            <span className="pb-6 text-7xl font-sans font-bold text-white">&#123; JS &#125;</span>
                            <HoveredCubeContent className="bg-black/50 text-3xl text-white font-bold text-center" from="right">
                                <ul>
                                    <li>Vanilla</li>
                                    <li>Typescript</li>
                                    <li>jQuery</li>
                                </ul>
                            </HoveredCubeContent>
                        </HoveredCube>
                    </div>
                </div>
            </Section>

            {/* Backend */}
            <Section className="flex flex-col justify-center" id="backend">
                <div className="w-full max-w-7xl pb-8 px-4 sm:px-8 lg:px-16 mx-auto">
                    <SectionTitle># {__('backend.title')}</SectionTitle>
                    <SectionSecondary>{__('backend.secondary')}</SectionSecondary>
                </div>
                <div className="grid grid-rows-2 pb-16">
                    <BoxWild className="border-b-4 border-secondary-800">
                        <BoxWildImage>
                            <Image src={laravelImg} layout="fill" objectFit="cover" priority={true} alt="Laravel" />
                        </BoxWildImage>
                        <BoxWildBody>
                            <h3 className="text-3xl">{__('backend.laravel.title')}</h3>
                            <h4 className="my-2 text-xl uppercase text-red-500">{__('backend.laravel.secondary')}</h4>
                            <Markdown className="flex flex-col gap-2 text-lg leading-relaxed" noProse>{__('backend.laravel.content-md')}</Markdown>
                        </BoxWildBody>
                    </BoxWild>
                    <BoxWild className="border-t-4 border-secondary-800">
                        <BoxWildImage>
                            <Image src={nodeImg} layout="fill" objectFit="cover" priority={true} alt="Node" />
                        </BoxWildImage>
                        <BoxWildBody>
                            <h3 className="text-3xl">{__('backend.node.title')}</h3>
                            <h4 className="my-2 text-xl uppercase text-green-500">{__('backend.node.secondary')}</h4>
                            <Markdown className="flex flex-col gap-2 text-lg leading-relaxed" noProse>{__('backend.node.content-md')}</Markdown>
                        </BoxWildBody>
                    </BoxWild>
                </div>
            </Section>

            {/* Softskills */}
            <Section id="softskills">
                <div className="flex flex-col justify-center w-full max-w-7xl px-4 sm:px-8 lg:px-16 mx-auto" style={{minHeight: 'calc(100vh - 3rem)'}}>
                    <SectionTitle># {__('softskills.title')}</SectionTitle>
                    <SectionSecondary>{__('softskills.secondary')}</SectionSecondary>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-md md:max-w-none mt-16 mx-auto gap-16">
                        <BoxIcon>
                            <LightbulbOnIcon className="w-32 h-32 fill-current"/>
                            <BoxIconTitle>{__('softskills.creativity.title')}</BoxIconTitle>
                            <BoxIconContent>{__('softskills.creativity.content')}</BoxIconContent>
                        </BoxIcon>
                        <BoxIcon>
                            <ClipboardListCheckIcon className="w-32 h-32 fill-current"/>
                            <BoxIconTitle>{__('softskills.organization.title')}</BoxIconTitle>
                            <BoxIconContent>{__('softskills.organization.content')}</BoxIconContent>
                        </BoxIcon>
                        <BoxIcon>
                            <MugHotIcon className="w-32 h-32 fill-current"/>
                            <BoxIconTitle>{__('softskills.communication.title')}</BoxIconTitle>
                            <BoxIconContent>{__('softskills.communication.content')}</BoxIconContent>
                        </BoxIcon>
                        <BoxIcon className="flex flex-col items-center">
                            <UsersIcon className="w-32 h-32 fill-current"/>
                            <BoxIconTitle>{__('softskills.teamwork.title')}</BoxIconTitle>
                            <BoxIconContent>{__('softskills.teamwork.content')}</BoxIconContent>
                        </BoxIcon>
                        <BoxIcon className="flex flex-col items-center">
                            <BracketsCurlyIcon className="w-32 h-32 fill-current"/>
                            <BoxIconTitle>{__('softskills.problem-solving.title')}</BoxIconTitle>
                            <BoxIconContent>{__('softskills.problem-solving.content')}</BoxIconContent>
                        </BoxIcon>
                        <BoxIcon className="flex flex-col items-center">
                            <LemonIcon className="w-32 h-32 fill-current"/>
                            <BoxIconTitle>{__('softskills.optimist.title')}</BoxIconTitle>
                            <BoxIconContent>{__('softskills.optimist.content')}</BoxIconContent>
                        </BoxIcon>
                    </div>
                </div>
            </Section>

        </Main>
    )
}

