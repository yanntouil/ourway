/**
 * Project Design 01 Blue-haired vacationer
 */ 
 import image from 'assets/images/portfolio/design/bluehairedvacationer.jpg'
 import thumbnail from 'assets/images/portfolio/design/bluehairedvacationer.jpg'
  
 const project = [{
    id: 'design-01',
    name: "bluehairedvacationer",
    image: image,
    thumbnail: thumbnail,
    category: "design",
    hero: true,
    homepage: true,
    fr: {
        title: "Blue-haired vacationer",
        description: "Montage crée en 2021, pour un article sur l'accessibilité. L'idée était de montrer l'ouverture sur le monde au travers de la différence.",
        applications: ['Photoshop'],
        links: [
            {
                name: "Image originale",
                href: "https://pixabay.com/images/id-2705642/",
            },
        ],
    },
    en: {
        title: "Blue-haired vacationer",
        description: "Editing created in 2021, for a blog post on accessibility. The idea was to show the opening on the world through the difference.",
        applications: ['Photoshop'],
        links: [
            {
                name: "Original image",
                href: "https://pixabay.com/images/id-2705642/",
            },
        ],
    }
}]
export default project