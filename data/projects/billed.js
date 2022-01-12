/**
 * Project Learning 02 Billed
 */ 
import billedImg from 'assets/images/portfolio/learning/billed.jpg'
import billedThumbnailImg from 'assets/images/portfolio/learning/billed-tumbnail.jpg'
 
const project = [{
    id: 'learning-09',
    name: "billed",
    image: billedImg,
    thumbnail: billedThumbnailImg,
    category: "learning",
    hero: false,
    homepage: false,
    fr: {
        title: "Billed",
        description: "Reprise d’un Saas RH permettant la gestion de justificatifs de déplacements. Ce projet avait pour but dans un premier temps de debugger l’app, d’établir une couverture complète de tests unitaires et d’intégration avec Jest et de créer un plan de tests manuels end to end.",
        stacks: ['Javascript', 'Jest'],
        links: [
            {
                name: "Projet sur GitHub",
                href: "https://github.com/yanntouil/YannTouil_9_18112021",
            },
            {
                name: "Plan E2E",
                href: "https://github.com/yanntouil/YannTouil_9_18112021/blob/master/end-to-end-plan.pdf",
            },
        ],
    },
    en: {
        title: "Billed",
        description: "Reprise d’un Saas RH permettant la gestion de justificatifs de déplacements. Ce projet avait pour but dans un premier temps de debugger l’app, d’établir une couverture complète de tests unitaires et d’intégration avec Jest et de créer un plan de tests manuels end to end.",
        stacks: ['Javascript', 'Jest'],
        links: [
            {
                name: "Projet sur GitHub",
                href: "https://github.com/yanntouil/YannTouil_9_18112021",
            },
            {
                name: "Plan E2E",
                href: "https://github.com/yanntouil/YannTouil_9_18112021/blob/master/end-to-end-plan.pdf",
            },
        ],
    }
}]
export default project