import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'app/hooks'
import { translationSelector } from 'app/reducers'
// Data
import blogArticles from 'data/blog/articles'
// Components
import Error404 from 'pages/404'
import Main from 'components/layout/Main'
import { SectionSecondary, SectionTitle } from 'components/ui/Section'
import Markdown from 'components/ui/Markdown'
import config from 'app/config'

/**
 * Page Blog Article
 */
export default function BlogArticle ({params}) {
    /**
     * Page settings
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageBlog')
    const article = blogArticles.find(article => article.category === params.category && article.slug === params.slug) ?? false
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: `${__('page-title')} : ${article.title}`}), [currentLanguage])
    // Not found redirection
    if (article === false) return (<Error404 />)
    /**
     * Render
     */
    return (
        <>
            <NextSeo
                openGraph={{
                    type: 'article',
                    article: {
                        tags: article.tags ? article.tags.join(' ') : '',
                        publishedTime: article.created,
                    },
                    images: [{
                        url: config.siteurl + article.images.cover,
                        width: 1920,
                        height: 1080,
                        alt: article.title,
                    }]
                }}
            />
            <Main noPaddingX noPaddingTop>
                <article>
                    {/* Image */}
                    <div className="relative aspect-[16/4] mt-16 sm:mt-24 xl:mt-0">
                        {article.banner ? (
                            <Image src={article.banner} alt={article.title} layout="fill" objectFit="cover" priority={true} />
                        ) : (
                            <Image src={article.cover} alt={article.title} layout="fill" objectFit="cover" priority={true} />
                        )}
                    </div>
                    {/* Heading */}
                    <div className="relative flex flex-col mt-12 mb-8 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                        <SectionTitle>{article.title}</SectionTitle>
                        <SectionSecondary>{article.description}</SectionSecondary>
                    </div>
                    {/* Content */}
                    <div className="relative flex flex-col max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                        <Markdown>{article.content}</Markdown>
                    </div>
                </article>
            </Main>
        </>
    )
}
export function getServerSideProps(context) {
    return {
      props: {params: context.params}
    }
}