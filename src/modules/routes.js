import { routes as auth } from './auth'
import { routes as dashboard } from './dashboard'
import { routes as landing } from './landing'
import { routes as profile } from './profile'
import { routes as users } from './users'

// Thus a new array is created, containing all objects that match the routes.
export default [...auth, ...dashboard, ...landing, ...profile, ...users]
