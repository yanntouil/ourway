import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'
import blogCategories from 'data/blog/categories'
import blogArticles from 'data/blog/articles'

// Components
import Main from 'components/layout/Main'
import BlogHeading, { BlogHeadingBody, BlogHeadingContent, BlogHeadingSecondary, BlogHeadingTitle } from 'components/ui/BlogHeading'
import { CardRotate, CardColoredBottom, CardContent, CardHeader, CardHeaderIcon, CardHeaderTitle, CardImage, Cards } from 'components/ui/Card'

// Images
import backgroundImg from 'assets/images/blog/categories/css-background.jpg'

// Icons
import NewspaperSvg from 'assets/images/icons/light/newspaper.svg'
import CalendarStarSvg from 'assets/images/icons/light/calendar-star.svg'
import GraduationCapSvg from 'assets/images/icons/light/graduation-cap.svg'
import Link from 'next/link'
import Error404 from 'pages/404'

/**
 * Blog page category React
 */
export default function BlogCategory() {
    /**
     * Page settings
     */
    const dispatch = useDispatch()
    const { currentLanguage, currentLocale } = useSelector(translationSelector)
    const __ = useTranslation('pageBlog')
    const { query } = useRouter()
    const categoryFind = blogCategories.find(category => category.name === query.category) ?? false
    const category = {...categoryFind, ...categoryFind[currentLanguage]}
    const articles = blogArticles.filter(article => article.category === category.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: `${__('page-title')} : ${category.title}`}), [currentLanguage])

    // Not found redirection
    if (categoryFind === false) return (<Error404 />)

    const formatDate = (date) => (new Date(date)).toLocaleDateString(currentLocale)
    // Not found redirection
    /**
     * Render
     */
    return (
        <Main noPaddingX  noPaddingTop>

            <BlogHeading>
                <Image src={category.background} alt={__('title')} layout="fill" objectFit="cover" priority={true} />
                <BlogHeadingBody>
                    <BlogHeadingTitle className={`text-stroke-${category.color}-500`}>{category.title}</BlogHeadingTitle>
                    <BlogHeadingSecondary>{category.secondary}</BlogHeadingSecondary>
                    <BlogHeadingContent>{category.description}</BlogHeadingContent>
                </BlogHeadingBody>
            </BlogHeading>
        
            <Cards>
                {articles.map(article => (
                    <CardRotate key={`blog-${category.name}-${article.id}`}>
                        <Link href={`/blog/${category.name}/${article.slug}`}>
                            <a className="grow flex flex-col gap-4">
                                <CardImage src={article.cover} />
                                <CardHeader>
                                    <CardHeaderIcon className={`bg-${category.color}-500`}>
                                        {/* Types icons */}
                                        {article.type === 'news' && <NewspaperSvg className="w-7 h-7 fill-current text-white" />}
                                        {article.type === 'update' && <CalendarStarSvg className="w-7 h-7 fill-current text-white" />}
                                        {article.type === 'tutorial' && <GraduationCapSvg className="w-7 h-7 fill-current text-white" />}
                                    </CardHeaderIcon>
                                    <CardHeaderTitle title={article.title} secondary={`${__('created-at')} ${formatDate(article.created)}`} />
                                </CardHeader>
                                <CardContent>{article.description}</CardContent>
                                <CardColoredBottom className={`bg-${category.color}-500`} />
                            </a>
                        </Link>
                    </CardRotate>
                ))}
            </Cards>
        </Main>
    )
}
