/**
 * Project Print 01 Carwash
 */ 
 import image from 'assets/images/portfolio/design/colorfulwoman.jpg'
 import thumbnail from 'assets/images/portfolio/design/colorfulwoman.jpg'
  
 const project = [{
    id: 'design-02',
    name: "colorfulwoman",
    image: image,
    thumbnail: thumbnail,
    category: "design",
    hero: true,
    homepage: true,
    fr: {
        title: "Colorful Woman",
        description: "Montage crée en 2021 pour mon portfolio. Je suis tombé par hasard sur cette image qui m’avait énormément inspiré. Et voilà le résultat après quelques effets localisés afin de mettre en valeur chacune des faces de ce visage déjà très coloré.",
        applications: ['Photoshop'],
        links: [
            {
                name: "Image originale",
                href: "https://pixabay.com/images/id-2985569/",
            },
        ],
    },
    en: {
        title: "Colorful Woman",
        description: "Editing created in 2021 for my portfolio. I came across this image by chance and it inspired me a lot. And here is the result after some localized effects to highlight each face of this already very colorful face.",
        applications: ['Photoshop'],
        links: [
            {
                name: "Original image",
                href: "https://pixabay.com/images/id-2985569/",
            },
        ],
    }
}]
export default project