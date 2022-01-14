import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
import config from 'app/config'
import projectsList from 'data/projects'
// Data
import blogPosts from 'data/blog/posts'
// Components
import Main from 'components/layout/Main'
import SliderWild from 'components/ui/SliderWild'
import HomeSlider from 'components/ui/HomeSlider'
import Section, { SectionSecondary, SectionTitle } from 'components/ui/Section'
import { BoxBullet, BoxBulletBody, BoxBulletContent, BoxBulletIcon, BoxBulletTitle } from 'components/ui/BoxBullet'
import Markdown from 'components/ui/Markdown'
// Images
import AuthorImage from 'assets/images/author.jpg'
// Icons
import RssSvg from 'assets/images/icons/light/rss.svg'
import BallotCheckSvg from 'assets/images/icons/light/ballot-check.svg'
import RecycleSvg from 'assets/images/icons/light/recycle.svg'
import ChartLineSvg from 'assets/images/icons/light/chart-line.svg'

/**
 * Homepage
 */
export default function Home() {
    /**
     * Page setting
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageHome')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])

    /** @state display phone number */
    const [displayPhone, setDisplayPhone] = useState(false)

    /** @state projects */
    const [ projects ] = useState(projectsList
        .filter(project => project.homepage)
        .map((project) => ({...project, ...project[currentLanguage]}))
        .slice(0, 5)
    )

    /** @state articles Hero */
    const [ blogPostsHero ] = useState(blogPosts
        .filter(post => post.hero)
        .sort((a, b) => (new Date(b.created)) - (new Date(a.created)))
        .slice(0, 5)
        .map((post) => ({ ...post, ...post[currentLanguage]}))
    )

    /**
     * Render
     */
    return (
        <>
            <NextSeo
                openGraph={{
                    title: config.sitename,
                    description: config.sitedescription,
                    images: [{
                        url: `${config.siteurl}/images/home/opengraph.jpg`,
                        width: 1200,
                        height: 630,
                        alt: config.sitename,
                    }]
                }}
            />
            <Main className="max-w-full overflow-hidden flex flex-col" noPaddingX noPaddingTop>
                <h1 className="sr-only">{__('title')}</h1>
                {/* Main Slider */}
                <Section className="relative h-screen" id="news">
                    <h2 className="absolute z-1 pl-8 lg:pl-16 pt-4 text-4xl md:text-6xl lg:text-8xl font-black tracking-wide uppercase text-center text-stroke text-stroke-secondary-800 text-secondary-800/50 dark:text-stroke-white dark:text-white/50">{__('news')}</h2>
                    <SliderWild slides={blogPostsHero} />
                </Section>

                {/* Welcome + About me */}
                <Section id="welcome">
                    <div className="flex flex-col justify-center w-full max-w-7xl min-h-screen-header px-4 sm:px-8 lg:px-16 mx-auto">
                        <SectionTitle># {__('welcome.title')}</SectionTitle>
                        <Markdown>{__('welcome.content-md')}</Markdown>
                        <div className="flex flex-col md:flex-row justify-center items-center w-full mt-8 mb-16 gap-16">
                            <div className="relative w-full max-w-sm sm:w-72 md:w-72 lg:w-96 aspect-square shrink-0 rounded-lg overflow-hidden bg-secondary-200">
                                <Image src={AuthorImage} layout="fill" objectFit="cover" priority={true} alt="Author" />
                            </div>
                            <div className="grow flex flex-col justify-center gap-4">
                                <h2 className="text-3xl font-semibold pb-4 border-b border-secondary-500"># {__('who-i-am.title')}</h2>
                                <Markdown>{__('who-i-am.content-md')}</Markdown>
                            </div>
                        </div>
                    </div>
                </Section>
                
                {/* Why me */}
                <Section id="why-work-with-me">
                    <div className="flex flex-col justify-center w-full max-w-7xl min-h-screen-header px-4 sm:px-8 lg:px-16 mx-auto">
                        <SectionTitle># {__('why-me.heading.title')}</SectionTitle>
                        <SectionSecondary>{__('why-me.heading.secondary')}</SectionSecondary>
                        <div className="flex flex-col my-8 gap-8">
                            <BoxBullet>
                                <BoxBulletIcon>
                                    <RecycleSvg className="w-16 h-16 fill-current" />
                                </BoxBulletIcon>
                                <BoxBulletBody>
                                    <BoxBulletTitle>{__('why-me.versatile.title')}</BoxBulletTitle>
                                    <BoxBulletContent>{__('why-me.versatile.content')}</BoxBulletContent>
                                </BoxBulletBody>
                            </BoxBullet>
                            <BoxBullet>
                                <BoxBulletIcon>
                                    <BallotCheckSvg className="w-16 h-16 fill-current" />
                                </BoxBulletIcon>
                                <BoxBulletBody>
                                    <BoxBulletTitle>{__('why-me.organized.title')}</BoxBulletTitle>
                                    <BoxBulletContent>{__('why-me.organized.content')}</BoxBulletContent>
                                </BoxBulletBody>
                            </BoxBullet>
                            <BoxBullet>
                                <BoxBulletIcon>
                                    <RssSvg className="w-16 h-16 fill-current" />
                                </BoxBulletIcon>
                                <BoxBulletBody>
                                    <BoxBulletTitle>{__('why-me.curious.title')}</BoxBulletTitle>
                                    <BoxBulletContent>{__('why-me.curious.content')}</BoxBulletContent>
                                </BoxBulletBody>
                            </BoxBullet>
                            <BoxBullet>
                                <BoxBulletIcon>
                                    <ChartLineSvg className="w-16 h-16 fill-current" />
                                </BoxBulletIcon>
                                <BoxBulletBody>
                                    <BoxBulletTitle>{__('why-me.productive.title')}</BoxBulletTitle>
                                    <BoxBulletContent>{__('why-me.productive.content')}</BoxBulletContent>
                                </BoxBulletBody>
                            </BoxBullet>
                        </div>
                        <div className="relative flex flex-col md:grid md:grid-cols-12 max-w-7xl p-4 sm:p-8 gap-8 bg-secondary-800 dark:bg-secondary-900 text-white overflow-hidden">
                            <div className="absolute -bottom-32 -right-16 rounded-full w-64 h-64 bg-secondary-700"></div>
                            <div className="absolute -bottom-16 -right-36 rounded-full w-64 h-64 border-2 border-secondary-400"></div>
                            <div className="absolute bottom-12 right-32 rounded-full w-16 h-16 bg-primary-800"></div>
                            <div className="relative sm:col-span-6 lg:col-span-8 flex flex-col gap-4">
                                <h2 className="text-3xl font-semibold">{__('why-me.footer.title')}</h2>
                                <p>{__('why-me.footer.content')}</p>
                            </div>
                            <div className="relative sm:col-span-6 lg:col-span-4 flex flex-col items-start gap-4">
                                <Link href="/contact" >
                                    <a className="block bg-primary-600 hover:bg-primary-700 rounded text-white px-8 py-2">{__('why-me.footer.contact-me')}</a>
                                </Link>
                                <p>
                                    {__('why-me.footer.call-me')}<br />
                                    {displayPhone ? (
                                        <a href={`tel:${config.author.phone}`} className="font-number">{config.author.phone}</a>
                                    ) : (
                                        <button type="button" onClick={() => setDisplayPhone(true)}>{__('why-me.footer.display-number')}</button>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Slider projects */}
                <Section id="lastest-projects">
                    <div className="w-full max-w-7xl pb-8 px-4 sm:px-8 lg:px-16 mx-auto">
                        <SectionTitle># {__('projects.title')}</SectionTitle>
                        <SectionSecondary>{__('projects.secondary')}</SectionSecondary>
                    </div>
                    <HomeSlider 
                        slides={projects}
                    />
                </Section>
                
            </Main>
        </>
    )
}

