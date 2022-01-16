/**
 * Article Les modules en Javascript
 */
import { v4 as uuid } from "uuid"
const article = [{
    id: '3024493-e654-455c-bfb7-1f517272c0b9',
    name: 'lesModulesEnJavascript',
    hero: false,
    images: {
        cover: '/images/blog/posts/react/3024493-e654-455c-bfb7-1f517272c0b9/cover.jpg',
        banner: '/images/blog/posts/react/3024493-e654-455c-bfb7-1f517272c0b9/banner.jpg',
    },
    slug: 'les-modules-en-javascript',
    type: 'tutorial',
    category: 'react',
    created: (new Date(2022, 0, 16)).toISOString(),
    title: "Les modules en Javascript",
    description: "Les notions de module paraissent souvent difficiles quand on se lance en JS, essayons de clarifier un peu tout ça.",
    content: `
## Un module c'est quoi ?

Les modules en Javascript correspondent à des blocs de code. Ces blocs de code contiennent leurs propres fonctionnalités et 
sont séparés du reste du code. Généralement, un module possède son propre fichier. L’avantage principal des modules est une 
meilleure séparation du code facilitant la maintenabilité et la lisibilité.

## Les exports de modules

Il existe 2 methodes pour exporter un module, les exports par défaut et les exports nommés. Vous comprendrez mieux leurs utilités
quand nous parlerons d'import.   

### Les exports par défaut

Voyons un peu les différentes manières d'exporter un module par défaut.

~~~js
// Exporter une fonction
export default function maFonction() {} 

// Exporter une fonction fléché
const maFonction = () => {}
export default maFonction

// Exporter une class
export default class {}

// Exporter une constante objet, array, string, number
const monModule = []
export default monModule

// Exporter une variable de type objet, array, string, number
const monModule = []
export default monModule
~~~

### Les exports nommés

Les exports nommés permettent de créer une multitude de modules dans un seul fichier.

~~~js
// Exporter une fonction
function maFonction() {}
export { maFonction }

// Exporter une fonction fléché
const maFonction = () => {}  
export { maFonction }

// Exporter une constante objet, array, string, number
const monModule = []
export { monModule }

// Exporter une constante avec renommage
const monModule = []
export { monModule as monSuperModule }

// Export multiple
const monArray = []
const maFonction1 = () => {}  
function maFonction2() {}
export { monArray, maFonction1, maFonction2 }
~~~

### Mélanger les 2 types

Rien ne nous empêche de mélanger les 2 méthodes bien au contraire, on n'a souvent tendance à le faire dans la création d'helpers 
et de composants pour mettre à disposition les modules et leurs dépendances. Voici un exemple concret au travers d'un helper 
permettant de créer des tableaux de nombres dans un intervalle défini.

~~~js
/**
 * Range
 * @param {Number} from
 * @param {Number} to
 * @return {Array.<Number>} 
 */
const range = (from, to) => {
    return rangeByStep(from, to)
}

/**
 * Range by step
 * @param {Number} from
 * @param {Number} to
 * @param {Number} [step=1]
 * @return {Array.<Number>} 
 */
const rangeByStep = (from, to, step = 1) => {
    let i = from
    const range = []
    while (i <= to) {
        range.push(i)
        i += step
    }
    return range
}

export range, { rangeByStep }
~~~

## Les imports de modules
Nous avons vu dans la première partie comment exporter un ou plusieurs modules d'un fichier, voyons maintenant un peu comment 
les importer. 

~~~js
// Import par defaut
import monModuleParDefaut from "nom-du-module"

// Import nommé
import { monModule } from "nom-du-module"

// Import multiple
import monModuleParDefaut, { monModule1, monModule2, monModule3 } from "nom-du-module"

// Syntaxe multiligne
import monModuleParDefaut, { 
    monModule1, 
    monModule2, 
    monModule3, 
} from "nom-du-module"

// Import multiple intégral
import * as mesModules from 'mon-module'
mesModules = {
    default, 
    monModule1, 
    monModule2,  
    monModule3
}

// Import multiple avec renommage complet ou partiel
import monModuleParDefaut, { 
    monModule1 as monSuperModule,  
    monModule2, 
    monModule3, 
} from "nom-du-module"

// Imports deferred existe mais sont très peu utilisés à notre niveau
import('/modules/mon-module')
  .then((module) => {
    // Faire quelque chose avec le module
})
~~~

## Les index
Le système de module à tendance complexifier l'organisation des fichiers. Pour revenir à quelque chose de bien plus simple, il est
possible de créer des index de module qui nous permettrons de gagner beaucoup de temps.

## Les imports / exports
Une méthode simple pour la création d'index est l'imports / exports. Concrètement on récupère un module et on le renvoie en même temps.

~~~js
// Import / export de module par défaut
export { default } from 'mon-module'

// Import / export de modules nommés
export { monModule1, monModule2, monModule3 } from 'mes-modules'

// Import / export mélangés
export { default, monModule1, monModule2 } from 'mes-modules'

// Import / export mélangés avec renommage
export { default as monModule1, monModule2, monModule3 } from 'mes-modules'
~~~

### Les fichier d'index

Dans une application comportant pas mal de module il est très important pour simplifier les imports de créer des fichiers d'index. 
Pour cela rien de plus simple, il suffit créer un fichier à la racine de votre dossier appelé index.js. Voyons un exemple concret
pour illustrer tout ça, je vais utiliser quelques helpers d'utilité courante pour cet exemple.

### Structure des fichiers

    helpers
        camalize.js
        index.js
        range.js
        regex.js
    app.js

### helpers/camalize.js

~~~js
/**
 * Camalize
 * @param {String}
 * @returns {String}
 */
export default function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}
~~~

### helpers/range.js

~~~js
/**
 * Range
 * @param {Number} from
 * @param {Number} to
 * @param {Number} [step=1]
 * @return {Array.<Number>} 
 */
const range = (from, to, step = 1) => {
    let i = from
    const range = []
    while (i <= to) {
        range.push(i)
        i += step
    }
    return range
}
export default range
~~~

### helpers/regex.js

~~~js
/** @type {RegExp} Mail test (RFC2822) */
export const mailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
~~~

### helpers/index.js

~~~js
import camalize from './camalize'
import range from './range'
import { mailRegex } from './regex'

export { camalize, range, mailRegex }
~~~

### app.js

~~~js
import { camalize, range, mailRegex } from './helpers'

// Faire quelque chose avec nos helpers
~~~

Nous voyons bien dans ce cas pratique l'utilité sur une grande quantité de module de créer des index. Sur une application 
du type React ou Vue la quantité de module est conséquente et l'utilisation d'index vous fera gagner énormément de temps dans 
votre développement.

## Conclusion

J'espère que ces explications vous auront été utiles, ce cours n'est pas exhaustif mais fait le tour de la plupart des cas d'usage 
dont vous aurez besoin pour vous lancer dans votre future vie de développeur JS. N'hésitez pas à me contacter sur Discord, via 
ma page de contact ou par mail pour me démandé des explications complémentaires et à faire un petit tour régulièrement sur ce blog, 
qui j'espère pourra vous apprendre de nouvelles choses.
`,




}]
  
export default article