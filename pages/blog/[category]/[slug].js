import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
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
export default function BlogArticle ({ params }) {
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
                    title: article.title,
                    description: article.description,
                    type: 'article',
                    article: {
                        publishedTime: article.created,
                        modifiedTime: article.created,
                        section: article.category,
                        tags: article.tags ?? [],
                        authors: [config.author.twitter]
                    },
                    images: [{
                        url: `${config.siteurl}/images/blog/posts/${article.id}/opengraph.jpg`,
                        width: 1200,
                        height: 630,
                        alt: article.title,
                    }]
                }}
            />
            <Main noPaddingX noPaddingTop>
                <article>
                    {/* Image */}
                    <div className="relative aspect-[16/4] mt-16 sm:mt-24 xl:mt-0">
                        {article.images.banner ? (
                            <Image src={article.images.banner} alt={article.title} layout="fill" objectFit="cover" priority={true} />
                        ) : (
                            <Image src={article.images.cover} alt={article.title} layout="fill" objectFit="cover" priority={true} />
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