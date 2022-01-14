import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'app/hooks'
import { translationSelector } from 'app/reducers'
// Data
import blogPosts from 'data/blog/posts'
// Components
import Error404 from 'pages/404'
import Main from 'components/layout/Main'
import { SectionSecondary, SectionTitle } from 'components/ui/Section'
import Markdown from 'components/ui/Markdown'
import config from 'app/config'

/**
 * Page Blog post
 */
export default function BlogArticle ({ params }) {
    /**
     * Page settings
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageBlog')
    const post = blogPosts.find(post => post.category === params.category && post.slug === params.slug) ?? false
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: `${__('page-title')} : ${post.title}`}), [currentLanguage])

    // Not found redirection
    if (post === false) return (<Error404 />)

    /**
     * Render
     */
    return (
        <>
            <NextSeo
                openGraph={{
                    title: post.title,
                    description: post.description,
                    type: 'article',
                    article: {
                        publishedTime: post.created,
                        modifiedTime: post.created,
                        section: post.category,
                        tags: post.tags ?? [],
                        authors: [config.author.twitter]
                    },
                    images: [{
                        url: `${config.siteurl}/images/blog/posts/${post.category}/${post.id}/opengraph.jpg`,
                        width: 1200,
                        height: 630,
                        alt: post.title,
                    }]
                }}
            />
            <Main noPaddingX noPaddingTop>
                <article>
                    {/* Image */}
                    <div className="relative aspect-[16/4] mt-16 sm:mt-24 xl:mt-0">
                        {post.images.banner ? (
                            <Image src={post.images.banner} alt={post.title} layout="fill" objectFit="cover" priority={true} />
                        ) : (
                            <Image src={post.images.cover} alt={post.title} layout="fill" objectFit="cover" priority={true} />
                        )}
                    </div>
                    {/* Heading */}
                    <div className="relative flex flex-col mt-12 mb-8 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                        <SectionTitle>{post.title}</SectionTitle>
                        <SectionSecondary>{post.description}</SectionSecondary>
                    </div>
                    {/* Content */}
                    <div className="relative flex flex-col max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                        <Markdown>{post.content}</Markdown>
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