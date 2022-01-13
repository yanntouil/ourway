import{ init as emailJSInit } from '@emailjs/browser'

const config = {
    sitename: 'Ourway',
    siteurl: 'https://portfolio.ourway.io',
    page: {
        title: 'Ourway',
    },
    menu: [
        {name: 'home', pathname: '/'},
        {name: 'skills.index', pathname: '/skills', /*children: [
            {name: 'skills.design', pathname: '/skills/design'},
            {name: 'skills.frontend', pathname: '/skills/frontend'},
            {name: 'skills.backend', pathname: '/skills/backend'},
        ]*/},
        {name: 'portfolio.index', pathname: '/portfolio', /*children: [
            {name: 'portfolio.design', pathname: '/portfolio/design'},
            {name: 'portfolio.print', pathname: '/portfolio/print'},
            {name: 'portfolio.website', pathname: '/portfolio/website'},
            {name: 'portfolio.learning', pathname: '/portfolio/learning'},
        ]*/},
        {name: 'blog.index', pathname: '/blog', children: [
            {name: 'blog.vue', pathname: '/blog/vue'},
            {name: 'blog.react', pathname: '/blog/react'},
            {name: 'blog.node', pathname: '/blog/node'},
            {name: 'blog.laravel', pathname: '/blog/laravel'},
            {name: 'blog.css', pathname: '/blog/css'},
            {name: 'blog.design', pathname: '/blog/design'},
            {name: 'blog.project-management', pathname: '/blog/project-management'},
            {name: 'blog.projects', pathname: '/blog/projects'},
        ]},
        {name: 'contact', pathname: '/contact'},
    ],
    menuSkills : [
        {name: 'skills.index', pathname: '/skills'},
        {name: 'skills.design', pathname: '/skills/design'},
        {name: 'skills.frontend', pathname: '/skills/frontend'},
        {name: 'skills.backend', pathname: '/skills/backend'},
    ],
    langs: [
        {name: 'french', flag: 'fr.png', local: "fr"},
        {name: 'english', flag: 'en.png', local: "en"},
    ],
    translation: {
        languages: ['fr', 'en'],// Languages available
        defaultLanguage: 'fr',// Default language
        fallbackLanguage: 'fr',// Fallback language use if translation is not found
        notFoundError: true,// Show error in console
        locale: {
            fr: 'fr-fr',
            en: 'en-us',
        }
    },
    author: {
        fullname: 'TOUIL Yann',
        firstname: 'Yann',
        lastname: 'Touil',
        phoneLink: 'tel:+352661799874',
        phone: '(+352) 661 799 874',
        email: 'yann@ourway.io',
        emailLink: 'mailto:yann@ourway.io',
        address: '34 rue du Village L-6183 Gonderange Luxembourg',
        address1: '34 rue du Village',
        address2: 'L-6183 Gonderange',
        address3: 'Luxembourg',
        addressLink: 'https://goo.gl/maps/PkoRkhwWH9WEWiTJ8',
        location: {
            lat: 49.69495452005914,
            lng: 6.245683515589769,
        },
        twitter: 'https://twitter.com/TouilYann',
        linkedin: 'https://www.linkedin.com/in/yann-touil-ab7696128/',
        slack: 'https://ourwaygroupe.slack.com/archives/C029FJTD41X',
        github: 'https://github.com/yanntouil',
    },
    contact: {
        timeBeforeNewMessage: 60 * 5,// 5 min
    },
    google: {
        gMapApiKey : 'AIzaSyBotMFNB4V8H_llMYaSki0LeMNyOE7mSqo'
    },
    emailJS: {
        init: () => emailJSInit('user_gdSqKaCGY2DjNjMNs49vO'),
        serviceId: 'service_r1mkh3j',
        templateId: 'template_acegtpf',
    }
}

export default config