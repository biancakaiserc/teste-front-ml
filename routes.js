const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('items', '/items?search=:slug')
routes.add('item', '/item/:slug')