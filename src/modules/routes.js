import { routes as auth } from './auth'
import { routes as dashboard } from './dashboard'
import { routes as forgotPassword } from './forgot-password'
import { routes as landing } from './landing'
import { routes as profile } from './profile'
import { routes as resetPassword } from './reset-password'
import { routes as users } from './users'
import { routes as verifyAccount } from './verify-account'

// Thus a new array is created, containing all objects that match the routes.
export default [
  ...auth,
  ...dashboard,
  ...forgotPassword,
  ...landing,
  ...profile,
  ...resetPassword,
  ...users,
  ...verifyAccount
]
