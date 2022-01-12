import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { v4 as uuid } from "uuid"
import { translationSelector } from 'app/reducers'
import { useTranslation } from 'app/hooks'

// Components
import Main from 'components/layout/Main'
import Card3D, { Card3DBack, Card3DFront } from 'components/ui/Card3D'
import { CardHeader, CardHeaderIcon, CardHeaderTitle, CardImage, CardContent, CardColoredBottom, CardFloatingButton, Cards } from 'components/ui/Card'

// Images
import VueSvg from 'assets/images/icons/brands/vuejs.svg'
import AngleDoubleLeftSvg from 'assets/images/icons/light/angle-double-left.svg'
import AngleDoubleRightSvg from 'assets/images/icons/light/angle-double-right.svg'
import { SectionSecondary, SectionTitle } from 'components/ui/Section'
import * as articles from 'data/blog/articles'
import categoriesList from 'data/blog/categories'


// Images
import HeadingSvg from 'assets/images/blog/heading.svg'
import { className, ucFirst } from 'app/helpers'
import camalize from 'app/helpers/camalize'


/**
 * Blog category page
 */
export default function Index() {
    /**
     * Hooks
     */
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(translationSelector)
    const __ = useTranslation('pageBlog')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => dispatch({type: 'layout/setPageTitle', payload: __('page-title')}), [currentLanguage])

    const [ categoryOpened, setCategoryOpened ] = useState('')

    const [ categories ] = useState(categoriesList.map(category => ({...category, ...category[currentLanguage]})))
    console.log(categories);
    /**
     * Render
     */
    return (
        <Main noPaddingX>

            <div className="relative mb-16">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col justify-center">
                    <HeadingSvg className="mb-4 fill-current text-secondary-800 dark:text-white" />
                    <SectionTitle heading={1}>{__('title')}</SectionTitle>
                    <SectionSecondary>{__('secondary')}</SectionSecondary>
                </div>
            </div>
            <Cards className={className({
                // Force Tailwind compilation to add this dynamics colors
                'bg-emerald-800': false, 'bg-sky-800': false, 'bg-green-800': false, 'bg-red-800': false, 'bg-rose-800': false, 'bg-amber-800': false, 'bg-indigo-800': false, 'bg-lime-800': false,
                'bg-emerald-600': false, 'bg-sky-600': false, 'bg-green-600': false, 'bg-red-600': false, 'bg-rose-600': false, 'bg-amber-600': false, 'bg-indigo-600': false, 'bg-lime-600': false,
                'bg-emerald-500': false, 'bg-sky-500': false, 'bg-green-500': false, 'bg-red-500': false, 'bg-rose-500': false, 'bg-amber-500': false, 'bg-indigo-500': false, 'bg-lime-500': false,
            })}>
                <h2 className="sr-only">{__('categories')}</h2>
                {categories.map((category) => (
                    <Card3D isTurned={categoryOpened === category.name} key={`blog-${category.name}`}>
                        <Card3DFront>
                            <Link href={`/blog/${category.name}`}>
                                <a className="grow flex flex-col gap-4">
                                    <CardImage src={category.cover} />
                                    <CardHeader>
                                        <CardHeaderIcon className={`text-white bg-${category.color}-500`}>
                                            <VueSvg className="w-7 h-7 mt-0.5 -mb-0.5 fill-current" />
                                        </CardHeaderIcon>
                                        <CardHeaderTitle title={category.title} secondary={category.secondary} />
                                    </CardHeader>
                                    <CardContent>{category.description}</CardContent>
                                    <CardColoredBottom className={`bg-${category.color}-500`} />
                                </a>
                            </Link>
                            <CardFloatingButton className="top-4 left-4" onClick={() => setCategoryOpened(category.name)}>
                                <AngleDoubleLeftSvg className="w-8 h-8 fill-current text-white" />
                            </CardFloatingButton>
                        </Card3DFront>
                        <Card3DBack className={`p-4 bg-${category.color}-600 dark:bg-${category.color}-800 text-white`} noBgColor>
                            <BlogLastArticles articles={articles[`lastest${ucFirst(camalize(category.name))}`]} />
                            <CardFloatingButton className="top-4 right-4" onClick={() => setCategoryOpened('')}>
                                <AngleDoubleRightSvg className="w-8 h-8 fill-current" />
                            </CardFloatingButton>
                        </Card3DBack>
                    </Card3D>
                ))}

            </Cards>
        </Main>
    )
}


export function BlogLastArticles({ articles, className }) {
    /**
     * Hooks
     */
    const __ = useTranslation('pageBlog')
    const { currentLocale } = useSelector(translationSelector)
    return (
        <div className={`grow flex flex-col justify-center gap-2 font-gochi-hand ${className}`}>
            <h4 className="text-3xl font-medium leading-normal text-center">{__('last-articles')}</h4>
            <ul className="flex flex-col py-2 gap-2">
                {articles.map((article) => (
                    <li className="" key={uuid()}>
                        <Link href={`/blog/${article.category}/${article.slug}`}>
                            <a className="flex justify-between gap-4 text-lg">
                                <div className="text-ellipsis">{article.title}</div>
                                <div>{(new Date(article.created)).toLocaleDateString(currentLocale)}</div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}





