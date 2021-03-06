/**
 * Project website 01 Ourway
 */ 
 import image from 'assets/images/portfolio/website/ourway.jpg'
 import thumbnail from 'assets/images/portfolio/website/ourway.jpg'
  
 const project = [{
    id: 'website-01',
    name: "ourway",
    image: image,
    thumbnail: thumbnail,
    category: "website",
    hero: true,
    homepage: true,
    fr: {
        title: "Ourway",
        description: "Mon site personnel, Développé sous React/Next avec toute ma personnalité. Ce projet est encore en cours de finition et sera amené à pas mal changer au cours de l’année 2022. N’hésitez pas à me faire des feedbacks, d’aller encore un peu plus loin.",
        stacks: ['React', 'Next', 'Redux', 'Framer motion', 'React Markdown', 'Tailwind'],
        links: [
            {
                name: "Projet en ligne",
                href: "https://www.ourway.io",
            },
            {
                name: "Projet sur GitHub",
                href: "https://github.com/yanntouil/ourway",
            },
        ],
    },
    en: {
        title: "Ourway",
        description: "My personal website, developed under React/Next with all my personality. This project is still being finished and will change a lot during the year 2022. Do not hesitate to give me feedbacks, to go a little further.",
        stacks: ['React', 'Next', 'Redux', 'Framer motion', 'React Markdown', 'Tailwind'],
        links: [
            {
                name: "Project on line",
                href: "https://www.ourway.io",
            },
            {
                name: "Project on GitHub",
                href: "https://github.com/yanntouil/ourway",
            },
        ],
    }
}]
export default project