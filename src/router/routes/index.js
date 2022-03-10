import { routes as modules } from '@/modules'
const requireRoute = require.context('.', false, /\.js$/) // Get js files inside routes folder
const routes = []

requireRoute.keys().forEach((fileName) => {
  // Avoid the index.js file
  if (fileName === './index.js') {
    return
  }
  const route = requireRoute(fileName).default
  routes.push(...route)
})

routes.push(...modules)

export default routes
