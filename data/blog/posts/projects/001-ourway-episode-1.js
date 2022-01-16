/**
 * Post : Ourway - Épisode 1
 */
  
const post = [{
    id: 'az769hha-31e5-195d-b298-5f43d8b5aba8',
    name: '',
    hero: true,
    images: {
        cover: '/images/blog/posts/projects/az769hha-31e5-195d-b298-5f43d8b5aba8/cover.jpg',
        banner: '/images/blog/posts/projects/az769hha-31e5-195d-b298-5f43d8b5aba8/banner.jpg',
    },
    slug: 'ourway-episode-1',
    type: 'discover',
    category: 'projects',
    created: (new Date(2022, 0, 16)).toISOString(),
    title: "Ourway - Épisode 1",
    description: "Vous voulez tout savoir sur le projet Ourway ? Et bien commençons par l'étape 1, la création et la mise en place du site.",
    content: `
Le projet **Ourway** est né suite à ma **formation de développeur frontend** alias développeur d'applications - JavaScript React (la formation 
a été renommée sur la fin). Une chose était sûre trouver un job sans **Portfolio** n'allait pas être une mince à faire, il me fallait un support
pour me présenter au recruteur. Le nom, très simple, j'avais fait un **réseau social** (communauté de gamer) une dizaine d'années en arrière
qui le portait, l'idée à cette époque était de pas faire comme les autres, suivre notre propre chemin. Et voilà une bonne chose de faites.

## Par où on commence ?

La première étape était de définir le besoin. 

1. J'ai besoin de me présenter - **Homepage**
2. J'ai besoin de montrer ce que je sais faire - **Compétence**
3. J'ai besoin de montrer ce que j'aime faire - **Portfolio**
4. J'ai besoin d'être contacté - **Contact**
5. J'ai besoin de m'exprimer - **Blog**

Cette étape était presque implicite mais c'est toujours bien de savoir ou l'on va.

## Et ensuite

La seconde étape était de mettre sur papier mes besoins, comme le papier c'est useless, j'ai fait mes **wireframes** sur **Figma**. Dans la
foulée on pousse un peu le **design** et on se lance sur une maquette. Mon projet commençait à se clarifier et avait son propre design.

Il fallait ensuite décider des **stacks** à utiliser. J'ai une bonne expérience de **Nuxt**, mais j'ai jamais touché à **Next** alors pourquoi tendre à la facilité quand on peut apprendre de nouvelles choses. 
Côté librairies le choix était rapide, il me fallait **uuid** indispensable pour mais faire mes keys sans contrainte, **Redux** ya pas de question là-dessus, **Tailwind**, j'aime beaucoup le **CSS** et mais je trouve que pour faire une design surmesure sans trop de contrainte ce Framework est super et rapide.
Il me fallait une librairie pour mes animations comme **Framer Motion** est la seule que je connaisse sous **React** le choix était vite fait.
Et une interface de saisie pour mon contenu et mon blog est quoi de mieux que **Markdown**.

## On se lance

Une fois Next installé, je me lance dans la création de ma première page. 
Et je me dis... si on ajoutait du muliligue. Aller c'est parti.
Je fais le tour des librairies et je me dis (oui ce mec se dit beaucoup de choses)... 
J'adore de système de traduction de Laravel, mais je ne trouve pas d'équivalent. 
Et bien c'est partie recueillie des besoins, structure des données de départ, création du reducer et des hooks et voilà un système de traduction créer.

Pour vous donner une idée du fonctionnement :

### translations/pages/home.js 

~~~js
const translation = {
    fr: {
        'page-title': "Accueil",
        'title': "Accueil",
        'welcome': {
            'title': "Bienvenue sur Ourway",
            ... 
        },
        ...
    },
    en: {
        'page-title': "Home",
        'title': "Home",
        'welcome': {
            'title': "Welcone on Ourway",
            ... 
        },
        ...
    }
}
~~~

### pages/home.js 
~~~js
export default function Home() {
    const __ = useTranslation('pageHome')
    return (
        <>
            <h1>{__('welcome.title')}</h1>
        </>
    )
}
~~~

Je trouve toujours pratique de sortir l'intégralité du texte dans un fichier à part, quand on joue le frontend, on ne s'inquiète pas 
du texte, tout va plus vite, quand on est content manager, on ne cherche pas pendant des heures les chaines de texte. En prime le 
système de traduction, gère la pluralisation, les variables dans les chaines de texte et... couplé à Markdown, l'emphase.

## Le layout

Une grosse partie du travail réside dans le layout. 
La première étape était de créer mon header, Logo, menu. Puis un second menu fullscreen pour les options de langue, le darkmode et un menu alternatif pour les mobiles.
On ajoute quelques liens sociaux, un peu de design avec Tailwind et Illustrator et on finit par créer un reducer pour géré les langues et un autre pour l'état du layout.
Une fois terminé, on attaque le footer, quelques liens sociaux, les mentions légales, mes coordonnées, on prend la pose, un coup de Photoshop et voila une autre étape de faite. 

Une fois la structure de faite on ajoute un peu de placeholder à ma page et on passe au responsive, avec Tailwind c'est plutôt rapide. 
On peut maintenant s'atteler aux animations, pop du menu et des icons, accordion sur le menu, ... 
Mon site commençait enfin à resembler à quelque chose, même si côté timing j'étais un peu en retard.

## Dans les prochains épisode de Ourway...

On parlera de l'intégration de la maquette, de problème de responsive, de réajustement de la maquette, de la création des la plupart 
des composants avec leurs difficultés, ... Mais pour cela il faudra encore attendre un peu, alors si vous avez des questions Discord,
Contact, mail, réseau sociaux... Vous savez ou me trouvé.
`,
}]
  
export default post