import articles from ".";
const lastestArticles = articles.sort((a, b) => (new Date(b.created)) - (new Date(a.created))).slice(0, 5)
export default lastestArticles