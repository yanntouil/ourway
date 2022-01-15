/**
 * Article À la découverte de Vue
 */
 
const article = [{
    id: 'be819ff0-31e5-404d-b261-5f50d8b5aba8',
    name: '',
    hero: true,
    images: {
        cover: '/images/blog/posts/vue/be819ff0-31e5-404d-b261-5f50d8b5aba8/cover.jpg',
        banner: '/images/blog/posts/vue/be819ff0-31e5-404d-b261-5f50d8b5aba8/banner.jpg',
    },
    slug: 'let-s-go-discover-vue',
    type: 'discover',
    category: 'vue',
    created: (new Date(2022, 0, 13)).toISOString(),
    title: "À la découverte de Vue",
    description: "Partez à la découverte de Vue, On parlera de l'histoire à de la réalité du marché vous saurez tout sur cette incontournable Framework.",
    content: `
Je m'excuse un peu de la longueur de cet article, l'idée de départ était de parler de l'histoire de vue, mais comment parler 
d'histoire sans expliquer l'avancement des besoins, les réponses fournies au fil du temps et la réalité du marché. J'ai ajouté 
un petit lexique en fin de page pour faciliter la lecture des non-développeurs, alors si vous avez du mal n'hésitez pas à commencer par là.

## Pour commencer une peu d'histoire

Vue JS est un Framework* **JavaScript** évolutif open-source permettant développer des interfaces utilisateur principalement 
pour construire des **PWA*** (Progressive Web App) et des **SPA*** (Single Page Application). Vue a été créé par **Evan You** 
un ancien développeur **Google** qui travaillait sur **Angular**, son principal but était de prendre le meilleur d'Angular et 
d'en faire **quelque chose de léger**. Le premier Commit* du projet a été fait en juillet 2013 et **Vue** voyait le jour en **février 2014**.   

La première grosse mise à jour **Vue 2**, sortie en **septembre 2016**, a procédé à pas mal de changement (boucle, condition, propagation 
des évènements, directives, ...), cette version est encore très utilisée je vous invite à faire un tour sur la 
[documentation en français](https://fr.vuejs.org/v2/guide/).   

C'est en septembre 2020 que la dernière version **Vue 3** apparut apportant son lot de nouveauté (Composition API, Teleport, 
Fragments, ...) permettant de compenser les petits défauts de ses prédécesseurs et d'ajouter quelques nouveautés de Javascript. 
Si vous souhaitez jeter un coup d'œil sur la [documentation en anglais](https://v3.vuejs.org/guide/introduction.html) pour en
savoir un peu plus sur cette version.

## Et sinon ça sert à quoi ?

Les frameworks javascript contemporain offrent une **structure logique** et **durable** pour la création de page web et facilite
les interactions des utilisateurs.   
Pour mieux comprendre il faut revenir un peu en arrière mêmes si pour cela je ne vais pas remonter jusqu'au tout début.

> Historiquement il y avait **jQuery** (en 2006) qui permettait de simplifier les interactions avec l'utilisateur, ça faisait le taf...
mais le code devenait vite une **usine à gaz** pour faire des choses plutôt simplistes et l'utilisation des languages serveurs était
encore très répandu pour offrir un contenu plus proche des utilisateurs.
> 
> En 2009 la première révolution est arrivée avec *Angular* propulser par Google proposant une **approche déclarative** de la programmation
et un système de **DOM virtuel**. Pour faire simple plus besoin de cibler des nœuds dans le code HTML pour y injecter du contenu,
maintenant au travers du **data binding*** on peut directement utiliser des variables pour le dynamiser.
La possibilité de répartir le code sur une architecture MVC* augmente nettement la **testabilité** et par la même la **maintenabilité**
du code.
>
> En 2011 **Facebook** débordé par la quantité d'interactions sur ses pages web (c'est FAUX) se lança sur React, une 
**bibliothèque flexible** prévue initialement pour la manipulation du DOM*. **React** se distingua rapidement à sa sortie dans
domaine libre en 2013 par sa **vélocité** et ses **performances**, ce qui en fera l'un des **frameworks** actuel les plus utilisés.

## Tout ça pour dire quoi en fait ?

Avant le virtual DOM, le code était très dépendant du HTML et on s'y perdait beaucoup. Avec l'arrivée des frameworks contemporains,
c'est devenu un jeu d'enfant de dynamiser une page web avec très peu de code en prime l'arrivée de ES6* en 2015 à **complètement enterrée**
**jQuery** et ses homologues.

Les Frameworks offrent une structure logique pour la création de page web, permettant d'automatiser les tests rendant le code plus 
durable, offre un chargement véloce des pages grâce au SPA* et rend au langage serveur leur rôle premier qui était de fournir des 
données, en gros une **API***.   

Je ne dis pas qu'avant nous ne pouvions pas, pour avoir connu le web 2.0 et vite appris que **Ajax** ne servait pas que à faire les vitres, 
mais plutôt que grâce à eux on peut faire mieux, plus vite et plus durablement.

En 2014 Vue arriva pour remédier à tous les défauts de ses concurrents, *un Framework unique, un Framework pour les gouverner tous*
(encore FAUX).

## Pourquoi choisir ce Framework ?

Les gouts et les couleurs ne se discutent pas, vous pourrez toujours comparer Vue aux autres Frameworks et vous faire votre propre idée.

Ce qui fait la différence pour moi c'est :

### Sa grande flexibilité

De la même façon que sur React, concevoir une architecture évolutive avec beaucoup de **liberté** est un vrai plaisir, les processus 
sont rapides, les mises à jour et les tests agréables. Certes ce manque de rigueur peut vite causer des incidents à long terme mais 
il ne tient qu'à vous de faire attention lors du développement.

### La structure de ses fichiers simple et lisible

Contrairement à React et Angular tout est se trouve à la même place dans un fichier unique. En prime on lit bien plus rapidement 
un composant Vue avec ses **Template HTML** qu'un composant React avec son **JSX**.

### Nuxt tout simplement 

Pour ceux qui ne connaissent pas Nuxt je vous invite à faire un tour sur [leur site](https://nuxtjs.org/), c'est un Framework
superposer à Vue (un peu comme les T-shirts de Sheldon) qui rend le développement excessivement simple.   
*Je lui dédirais un article à part entière*, mais pour vous faire un rapide tour Nuxt est super-modulaire, il vous met à 
disposition Webpack, votre Framework CSS préféré, votre librairie de test préférée, un router automatisé, ... en moins de 3 minutes.   
Que demander de plus et bien le **prerendering*** Node</Bold> pour la **SEO**, les messages d'erreur super descriptifs, ... 
je m'arrête là je pourrais en parler toute la journée.   

Si maintenant vous êtes comme moi un ancien développeur **PHP** habitués à utiliser Laravel, vous pouvez également 
profiter de Vue dans de très bonnes conditions grâce au stack **Inertia** fournie par **Jetstream**.
Si vous voulez vous documenter je vous laisse les liens vers [Inertia](https://inertiajs.com/) et 
[Jetstream](https://jetstream.laravel.com/2.x/introduction.html#inertia-vue).

## Pourquoi ne pas choisir ce Framework ?

Il fallait tôt ou tard en passé par là ... ... Vue n'a pas que des forces il a aussi ses faiblesses.

### Son logo est moche

Je sais c'était important de le dire, il est **moche** et l'a toujours été je le copy paste depuis tout à l'heure et je n'aurais pas pu passer à côté de ça en écrivant cet article.

### Mais où est passé la communauté

Comparé à React et Angular la communauté Vue est **moindre**, même si ça tend à remonter depuis que **Nuxt** est arrivé. Essayer 
de trouver un développeur Vue devient très **difficile**, le problème vient à mon avis de la **standardisation** du marché, le choix 
des frameworks est bien trop grand et les nouveaux développeurs aux vues de cette quantité de chose à apprendre vont à l'**essentiel** 
soit sur React et alors que bizarrement la courbe d'apprentissage est clairement plus facile que celle des autres Frameworks.

### La quantité d'outils

Je n'ai plus utilisé Angular depuis des années mais en comparant la quantité de composant et plugins disponibles sur React à 
celle de Vue y'a pas photo. Je n'ai jamais passé autant de temps à développer des composants et de plugins d'utilité courante que 
sur ce Framework, ça à l'avantage d'être sur mesure mais c'est une perte de temps considérable. C'est une des raisons pour laquelle 
je me suis vite mis à React qui en matière de productivité est bien plus imposant.

## Finalement vue ça vaut quoi ?

Pour résumé un peu tous ce qui à été dit dans cet article, Vue c'est un **super framework**, qui possède les mêmes avantages 
que ses concurrents (DOM virtuel, composant, state management, hooks), à certains avantages avec ses **templates HTML**, ses 
styles à portées limitées (scoped style), trouve sa place dans une intégration **Laravel** native, est très accessible 
particulièrement comparé à Angular.

Mais je pense surtout à l'avantage d'être implémenté dans Nuxt ce qui lui donne une force considérable face au contrainte de la SEO 
et de mise en place d'un environnement de travail rapide et fonctionnel. Certes certain aficionado de React ne seront pas d'accord 
avec moi et je reste à leurs dispositions pour leur faire part de mes impressions.

## Faut-il choisir Vue en 2022 pour un projet ?

Je dirais oui, mais encadré vous bien et dans l'incertitude partez sur React à coup sûr vous trouverez des personnes très qualifiées 
pour mener à bien vos idées et leurs donner vie.

## Faut-il se spécialiser Vue en 2021 ?
Je dirais clairement non. Je l'utilise pour une seule raison "j'aime ça", mais trouver un job grâce à Vue, je ne suis 
pas sure. Alors que React est très demandé dans le développement de site web et Angular brule de part son manque de développeur et 
une très forte demande dans pas mal de très grosses sociétés.   

Alors faites comme moi, passez votre **week-end sur Vue**, prenez-y du plaisir et retournez bosser sur **React le lundi**.

Je sais qu'après cette conclusion tranchée sur mon Framework JS préféré, je vais me faire des ennemies dans la communauté Vue, 
mais sachez qu'un Framework est avant tout un outil l'important "c'est-ce qu'on en fait".

Au passage cet article n'est pas un comparatif, c'est avant tout ma vision sur sur Vue et j'ai hâte de vous faire partager plein 
de tips dans mes futurs articles. Alors si vous avez eu le courage de me lire jusque-là je vous remercie. N'hésitez pas à me contacter 
sur les principaux canaux de discussion pour en parler et bien sûr partagez cet article sur vos réseaux sociaux préférés.

## Petit lexique pour les non développeur
J'ai essayé de faire le tour des notions difficiles pour les non-développeurs afin de rendre la lecture plus simple. Certains termes 
trop orientés développement comme les "Hooks" ou les "States", ne vous serviront pas avant d'avoir compris bien leurs usages. Si 
malgré tout, certain terme devait trouver de la lumière, je reste à votre disposition sur les principaux canaux de discussion 
disponible en bas de page.

### Framework

Un Framework tout du moins dans notre cas est une infrastructure de développement. C'est un cadre nous fournissant les méthodes, 
les outils et la direction pour répondre à nos besoins.

### Commit

C'est un terme utiliser par les systèmes de versionnage pour dire que l'on a soumis quelque chose. Le versionnage permet de conserver 
une trace de toutes les modifications dans le temps.

### ES6

ES viens de ECMAScript, c'est un ensemble de norme de standardisation des langages de programmation. ES6 normalise une grosse partie 
des nouveautés de Javascript, ES7 publier 2016 est instauré en même temps qu'un changement de processus de normalisation par une 
publication annuelle.

### DOM

Le Document Objet Model est une interface de programmation qui permet d'inspecter et de modifier le contenu du navigateur web. Comme 
j'aime à le dire le code HTML "c'est comme des boîtes dans des boîtes", il suffit de mettre une étiquette sur une boîte ou un 
couvercle de couleur pour y accéder rapidement, dans le cas contraire, il faut ouvrir plusieurs boîtes avant de trouver son bonheur.

### MVC

Architecture Modèle Vue contrôleur vise à dispatcher les taches dans un site web ou une application. Le modèle contient les données, 
la vue présente l'interface et le contrôleur la logique concernant les actions à effectué.

### Data binding

Data binding est un moyen de faire communiquer la vue et les modèles. Il peut être unidirectionnelle "One-way data binding" (React), 
les données du modèle changent et répercutent le changement dans la vue ou bidirectionnelle "Two-way data binding" (Angular), 
les données circulent dans les 2 sens.

### Prerendering

Lorsqu'un utilisateur visite une SPA*, son navigateur télécharge plusieurs fichiers et exécute le code pour déterminer à quoi 
doit ressembler la page, c'est ce qu'on appelle le rendu côté client.
C'est bien pour la plupart des utilisateurs humains, mais les robots des moteurs de recherche se déplacent rapidement, apprenant 
autant que possible sans utiliser leurs ressources informatiques. Ainsi, lorsqu'ils trouvent une SPA*, ils peuvent ne lire que quelques 
pages ou en avoir une image incomplète et par cela pénalise la SEO.

### SPA

Une Single Page Application est une application web monopage, le but étant de n'afficher qu'une seule page et d'en modifier sont 
contenus dynamiquement. L'utilisation est transparente et permet de fluidifier l'expérience utilisateur. On gagne ainsi en vélocité, 
même si le premier chargement est toujours plus long que si la page était délivrée par un serveur, les prochaines pages sont bien 
plus rapides.

### PWA

Une Progressive Web App c'est simplement un site web pouvant être utilisé comme une application. Même si la définition paraît simple, 
on demande à une PWA d'aller au-delà du site et d'être un minimum autonome, particulièrement en cas de perte de connexion, elles 
doivent mettre les données en cache en attendant de pouvoir les mettre à jour sur l'API*.

### API

Un API (Application Programming Interface) est un ensemble de protocoles facilitant la création et l'intégration de logiciel d'application.   
En gros c'est la façade, l'interface de l'application. Dans un site web de type SPA, votre navigateur demande des informations à l'API, 
l'API les renvois, votre navigateur notifie les changements de l'utilisateur à l'API, l'API les sauvegarde.   
La plupart des sites web que l'on connaît ont des API ouvert, *icon-youtube* YouTube nous permet de récupérer des informations sur ses vidéos, 
*icon-mapMarkerAlt* Maps d'afficher une carte, *icon-sunCloud* Weather la météo.   
L'utilité principale d'une API est de supprimer la dépendance entre l'interface utilisateur et la logique de conservation et de 
restitution de données. Grâce à une API vous pouvez faire un  site web, une app Android, une app iPhone et en prime, fournir des 
informations utiles à des tiers.

`,
 }]
 
 export default article