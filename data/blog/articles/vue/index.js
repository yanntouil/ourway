/**
 * Blog Vue
 */
import lorem1 from './lorem1'
import lorem2 from './lorem2'
import lorem3 from './lorem3'
import lorem4 from './lorem4'
import lorem5 from './lorem5'
import lorem6 from './lorem6'
import lorem7 from './lorem7'
import lorem8 from './lorem8'

import letSGoDiscoverVue from './001-let-s-go-discover-vue'






const articles = [
    ...lorem1, ...lorem2, ...lorem3, ...lorem4, ...lorem5, ...lorem6, ...lorem7, ...lorem8,
    ...letSGoDiscoverVue,
]
export default articles

export const lastestVueArticles = articles.sort((a, b) => (new Date(b.created)) - (new Date(a.created))).slice(0, 5)