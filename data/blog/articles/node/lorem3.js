/**
 * Article placeholder
 */
import { v4 as uuid } from "uuid"
import cover from 'assets/images/blog/categories/node-cover.jpg'

const article = [{
    id: uuid(),
    name: '',
    hero: false,
    cover: cover,
    slug: 'lorem3',
    type: 'update',
    category: 'node',
    created: (new Date((new Date(2020, 0, 1)).getTime() + Math.random() * ((new Date()).getTime() - (new Date(2020, 0, 1)).getTime()))).toISOString(),
    title: "Le titre de mon article",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid doloribus voluptatum facilis, recusandae similique quidem.",
    content: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi reiciendis? Sequi repellendus, impedit nemo perferendis praesentium necessitatibus consequuntur voluptas in enim, minus nam molestias dolor neque distinctio aliquam omnis!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi reiciendis? Sequi repellendus, impedit nemo perferendis praesentium necessitatibus consequuntur voluptas in enim, minus nam molestias dolor neque distinctio aliquam omnis!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi reiciendis? Sequi repellendus, impedit nemo perferendis praesentium necessitatibus consequuntur voluptas in enim, minus nam molestias dolor neque distinctio aliquam omnis!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi reiciendis? Sequi repellendus, impedit nemo perferendis praesentium necessitatibus consequuntur voluptas in enim, minus nam molestias dolor neque distinctio aliquam omnis!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi reiciendis? Sequi repellendus, impedit nemo perferendis praesentium necessitatibus consequuntur voluptas in enim, minus nam molestias dolor neque distinctio aliquam omnis!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi reiciendis? Sequi repellendus, impedit nemo perferendis praesentium necessitatibus consequuntur voluptas in enim, minus nam molestias dolor neque distinctio aliquam omnis!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi reiciendis? Sequi repellendus, impedit nemo perferendis praesentium necessitatibus consequuntur voluptas in enim, minus nam molestias dolor neque distinctio aliquam omnis!
    `,
}]

export default article