import vue from './vue'
import lastestVue from './vue/lastest'
import react from './react'
import lastestReact from './react/lastest'
import node from './node'
import lastestNode from './node/lastest'
import laravel from './laravel'
import lastestLaravel from './laravel/lastest'
import css from './css'
import lastestCss from './css/lastest'
import design from './design'
import lastestDesign from './design/lastest'
import projectManagement from './projectManagement'
import lastestProjectManagement from './projectManagement/lastest'
import projects from './projects'
import lastestProjects from './projects/lastest'

const articles = [
    ...vue, ...react, ...node, ...laravel, ...css, ...design, ...projectManagement, ...projects,
]
export default articles

export { lastestVue, lastestReact, lastestNode, lastestLaravel, lastestCss, lastestDesign, lastestProjectManagement, lastestProjects }
