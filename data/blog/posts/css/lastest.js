/**
 * Lastest posts
 */
import posts from ".";

const lastestPosts = posts.sort((a, b) => (new Date(b.created)) - (new Date(a.created))).slice(0, 5)
export default lastestPosts