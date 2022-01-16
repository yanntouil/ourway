/**
 * Article Les methodes de Array
 */

const article = [{
    id: '77ee8435-6aa8-4bdc-9764-dcbf8180177c',
    name: 'lesMethodesDeArray',
    hero: false,
    images: {
        cover: '/images/blog/posts/react/77ee8435-6aa8-4bdc-9764-dcbf8180177c/cover.jpg',
        banner: '/images/blog/posts/react/77ee8435-6aa8-4bdc-9764-dcbf8180177c/banner.jpg',
    },
    slug: 'les-methodes-de-array',
    type: 'tutorial',
    category: 'react',
    created: (new Date(2022, 0, 16)),
    title: "Les méthodes de Array",
    description: "Connaitre tout enfin presque sur l'objet Array, ses méthodes et aller un peu plus loin avec des cas d'usages concrets.",
    content: `
Les bonnes pratiques concernant l'usage des Array en Javascript est indispensable. Les Array nous simplifient la vie et rendent 
l'usage des boucles presque useless.   
Je vais essayer au travers de ce cours de vous montrer un maximum de cas d'usage utiles dans votre quotidien, ne vous inquiétez 
pas certains usages seront un peu exotique mais très pratique à utiliser avec des Frameworks.
    
## Différentes manières de créer un Array

### Création d'un Array

~~~js
// Création d'un tableau de string
const languages = ['Python', 'Java', 'C', 'C++', 'Javascript', 'PHP']

// Création d'un tableau d'objet
const films = [
    {
        name: 'Iron Man',
        producer: 'Jon Favreau',
        releaseDate: 2008,
    },
    {
        name: 'Iron Man 2',
        producer: 'Jon Favreau',
        releaseDate: 2010,
    },
    {
        name: 'Thor',
        producer: 'Kenneth Branagh',
        releaseDate: 2011,
    }
]
~~~

### Techniques avancées, voir exotiques

Voila quelques techniques supplémentaire pour créer un Array, nous verons un peu plutard comment et dans quel cas on pourra s'en servir.

~~~js
// Créer un Array de caractères à partir d'une string
const string = 'ma chaine'
const array = [...string]// ['m', 'a', ' ', 'c', 'h', 'a', 'i', 'n', 'e']

// Créer un Array à partir d'un objet
const object =     {
    name: 'Thor',
    producer: 'Kenneth Branagh',
    releaseDate: 2011,
}

// Array avec les valeurs
const array = Object.values(object)// ['Thor', 'Kenneth Branagh', 2011]

// Array avec les clés
const array = Object.keys(object)// ['name', 'producer', 'releaseDate']

// Array avec les paires clés, valeurs
const array = Object.entries(object)// [['name', 'Thor'], ['producer', 'Kenneth Branagh'], ['releaseDate', 2011]]

// Créer un Array de n éléments
const array = [...Array(5).keys()]// [0, 1, 2, 3, 4]
~~~

## Les méthodes de l'objet Array

### Manipulation de base

Il est indispensable de connaitre ces méthodes par cœur.

~~~js
const languages = ['Python', 'Java', 'C', 'C++', 'Javascript']

// Ajouter un élément à la fin (retourne la nouvelle longueur)
languages.push('PHP')// 6

// Ajouter un élément au début (retourne la nouvelle longueur)
languages.unshift('Ruby')// 7

// Supprimer le dernier élément (retourne l'élément supprimé)
languages.pop()// 'PHP'

// Supprimer le premier élément (retourne l'élément supprimé)
languages.shift()// 'Ruby'

// Retourne la longueur d'un Array
languages.length// 5

// Retourne la fin d'un Array à partir de l'index
languages.slice(2)//['C++', 'Javascript']
~~~

### Manipulation d'index
Plusieurs méthodes vous permettent d'accéder à un index, d'en rechercher un ou de supprimer un élément par son index.
~~~js
const colors = ['bleu', 'rouge', 'vert', 'jaune', 'bleu']

// Retourne une section à partir de l'index de départ (1) et l'index de fin (2)
languages.slice(1, 2)//['rouge']

// Retourne l'index du premier élément ou -1
colors.indexOf('bleu')// 0
colors.indexOf('orange')// -1

// Retourne l'index du dernier élément ou -1
colors.lastIndexOf('bleu')// 4
colors.lastIndexOf('orange')// -1

// Retire 1 élément à partir de l'index 0 et retourne l'élément retiré
colors.splice(0, 1)// 'bleu'

// Et si on mix tout on peut retirer un élément précis et le retourné
colors.splice(colors.indexOf('vert'), 1)// 'vert'
~~~

### Classement

Particulièrement utile quand on manipule de grandes quantités de données, les méthodes de trie sont indispensables.

~~~js
// Retourne un Array en inversant les clés
const chiffres = ["un", "deux", "trois"]
chiffres.reverse()// ["trois", "deux", "un"]

// Retourne un Array trier par ordre alphabétique
const pays = ["Allemagne", "France", "Italie", "Espagne", "Portugal"]
pays.sort()// ['Allemagne', 'Espagne', 'France', 'Italie', 'Portugal']
pays.sort((a, b) => a - b)// ['Allemagne', 'Espagne', 'France', 'Italie', 'Portugal']

// Retourne un Array trier par ordre alphabétique inversé
pays.sort((a, b) => b - a)// ['Allemagne', 'France', 'Italie', 'Espagne', 'Portugal']

// Classement avec des dates
const dates = ['2020-02-29', '2021-12-17', '2022-01-15']
dates.sort((a, b) => new Date(a) - new Date(b))// ['2020-02-29', '2021-12-17', '2022-01-15']

// Inversé
dates.sort((a, b) => new Date(b) - new Date(a))// ['2022-01-15', '2021-12-17', '2020-02-29']

// Conditionnel (Souvent utilisé dans les data table)
let sort = "ASC"
dates.sort(// ['2020-02-29', '2021-12-17', '2022-01-15']
    (a, b) => sort === "ASC" ? 
        new Date(a) - new Date(b) : 
        new Date(b) - new Date(a)
)

sort = "DESC"
dates.sort(// ['2022-01-15', '2021-12-17', '2020-02-29']
    (a, b) => sort === "ASC" ? 
        new Date(a) - new Date(b) : 
        new Date(b) - new Date(a)
)
~~~

### Recherche

~~~js
// On va reprendre nos films un peu enrichit
const films = [
    {
        name: 'Iron Man',
        producer: 'Jon Favreau',
        releaseDate: 2008,
        type: 'MCU',
        actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard', 'Jeff Bridges'],
    },
    {
        name: 'Iron Man 2',
        producer: 'Jon Favreau',
        releaseDate: 2010,
        type: 'MCU',
        actors: ['Robert Downey Jr.', 'Mickey Rourke', 'Gwyneth Paltrow', 'Scarlett Johansson'],
    },
    {
        name: 'Thor',
        producer: 'Kenneth Branagh',
        releaseDate: 2011,
        type: 'MCU',
        actors: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins'],
    }
]

// Retourne le premier élément correspondant au producteur
const producer = "Jon Favreau"
films.find(film => film.producer === producer)// {name: 'Iron Man', producer: 'Jon Favreau', releaseDate: 2008, type: 'MCU', actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard', 'Jeff Bridges']}

// Retourne l'index du premier élément correspondant au producteur
films.findIndex(film => film.producer === producer)// 0

// Retourne true si au moins un élément correspond au producteur
films.some(film => film.producer === producer)// true

// Retourne true si tous les éléments correspondent au MCU
const type = "MCU"
films.every(film => film.type === type)// true

// Un peu de recherche avec filter 
films.filter(film => film.producer === producer)// Retourne les éléments correspondant au producteur
const search1 = 'Iron man'
films.filter(// Retourne les films contenant le motif de recherche dans le nom
    film => film.name.toLowerCase().includes(search1.toLowerCase())
)

// Recherche de second niveau
const search2 = 'Gwyneth'
films.filter(// Retourne les films contenant le motif dans le nom d'un acteur
    film => film.actors.some(actor => actor.toLowerCase().includes(search2.toLowerCase()))
)

// Si je vous ai perdu on le fait au ralenti
films.filter(
    film => {// On filtre les résultats de façon conditionnel
        return film.actors.some(// On parcours les acteurs à la recherche d'une correspondance
            actor => {
                const actorLowerCase =  actor.toLowerCase()// Acteur en minuscule
                const search = search2.toLowerCase()// Motif de recherche en minuscule
                return actorLowerCase.includes(search)// On verifie si un acteur contient le motif
            }
        )
    }
)
~~~

### Opérations avec reduce

Cette méthode permet de réduire tous les éléments d'un Array à une seule valeur. Particulièrement utiles pour faire des calculs 
dans un Array. Je m'en sers très peu mais c'est toujours bien de savoir qu'elle existe. 

~~~js
// Un nouveau Array avec des likes
const photos = [
    {
        name: 'Glace en formation',
        likes: 27625854,
    },
    {
        name: 'La baie des singes',
        likes: 2597,
    },
    {
        name: 'Table en bois brut dans un magnifique cadre',
        likes: 125442,
    }
]

// Une méthode simple pour compter les likes de toutes les photos
photos.reduce((likes, photo) => likes + photo.likes, 0)

// Reduce prend en paramètres une callback et une valeur initial au ralenti ça donne
const result = photos.reduce(
    (
        likes,// Valeur précédente on commencera la première itération avec la valeur initial soit 0
        photo// Valeur courante de l'itération
    ) => 
        likes + photo.likes// On additionne la valeur précédente avec la valeur courante de like
    , 
    0// Valeur initial
)
~~~

### Transformations avec map

Cette méthode permet de créer un nouvel Array en manipulant les valeurs d'un Array. Certainement la méthode la plus utilisée 
par les développeurs React, elle nous permet d'itérer sur Array et d'en sortir du JSX.

~~~js
// Reprenons nos films
const films = [
    {
        name: 'Iron Man',
        producer: 'Jon Favreau',
        releaseDate: 2008,
    },
    {
        name: 'Iron Man 2',
        producer: 'Jon Favreau',
        releaseDate: 2010,
    },
    {
        name: 'Thor',
        producer: 'Kenneth Branagh',
        releaseDate: 2011,
    }
]

// Je veux la liste de nom de films séparé par une virgule
films.map(film => film.name).join(', ')// Iron Man,Iron Man 2,Thor

// Je veux ajouter le studio Disney à tous les films
films.map(film => ({...film, studio: 'Disney'}))// Version destructuring
films.map(film => {// Version sans destructuring
    film.studio = 'Disney'
    return film
})

// Je veux ajouter une année à chaque film
films.map(film => ({...film, releaseDate: film.releaseDate + 1}))// Version destructuring
films.map(film => {// Version sans destructuring
    film.releaseDate += 1
    return film
})

// Pour sortir un peu des films, je veux générer un tableau avec n nombre aléatoire pour une animation
const arrayRandom = [...Array(5)].map(i => Math.floor(Math.random() * 10))

// Je veux générer des transformations aléatoire pour une animation
const result = [...Array(5)].map(i => ({
    transform: \`translate(\${Math.floor(Math.random() * 1.2 * 100) + "px"}, \${Math.floor(Math.random() * 1.2 * 100) + "px"}) rotate(\${Math.floor(Math.random() * 360)}deg)\`
}))
~~~

### Destructuring et spread

Dernier point important de ce cours sur les Array, le destructuring et l'opérateur spread

~~~js
// Prenons un array
const array1 = [1, 2, 3, 4, 5]

// Nous pouvons en faire une copie non liée avec l'opérateur spread
const array2 = [...array1]// [1, 2, 3, 4, 5]

// Nous pouvons égualement ajouter un tableau à la suite d'un autre avec l'opérateur spread
const array3 = [...array1, ...array2]// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// Obtenir un équivalent de push et unshift
array1.unshift(0)// [0, 1, 2, 3, 4, 5]
array1.push(6)// [0, 1, 2, 3, 4, 5, 6]
const array4 = [0, ...array1, 6]// [0, 1, 2, 3, 4, 5, 6]

// Coté le destructuring nous pouvons récupérer une propriété de Array
const { length } = array4// length = 7

// Une partie d'un tableau
const { key0, key1, key2 } = array4// key0 = 0, key1 = 1, key2 = 2

// Et bien d'autres choses en mélangeant ces 2 techniques, comme mon helper ucFirst que j'utilise souvent
let string = 'ma chaine'
const [ first, ...rest ] = string// first = 'm', rest = 'a chaine'
string = first.toLocaleUpperCase() + rest.join('')// 'Ma chaine'

// Sous forme de fonction fléchée ça donne
const usFirst = ([ first, ...rest ]) => first.toLocaleUpperCase() + rest.join('')
~~~

## Conclusion
Une bonne connaissance de l'objet Array et de ses méthodes est réellement indispensable dans la vie d'un développeur qu'il soit frontend, 
node ou fullstack JS. J'ai essayé au travers de ce cours de vous partager les choses les plus importantes mais il n'est pas exhaustif.
il vous restera encore beaucoup de choses à apprendre, mais ces bases auront l'avantage de vous permettre de le faire seul.
Comme d'habitude si vous avez besoin de complément d'information, je reste à votre disposition sur Discord, par mail, ...
`,
 
 
 
 
}]

export default article