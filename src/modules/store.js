import { store as auth } from './auth'
import { store as dashboard } from './dashboard'
import { store as forgotPassword } from './forgot-password'
import { store as landing } from './landing'
import { store as profile } from './profile'
import { store as resetPassword } from './reset-password'
import { store as users } from './users'
import { store as verifyAccount } from './verify-account'

// start extraction data from store modules
const store = {
  auth,
  dashboard,
  forgotPassword,
  landing,
  profile,
  resetPassword,
  users,
  verifyAccount
}
const keys = Object.keys(store)

/**
 * this is a full functional approach
 * this code use reduce end immutability with spread operator to generate new object and array
 */
const modules = keys.reduce(
  (acc, key) => ({ ...acc, [key]: store[key].module }),
  {}
)

/**
 * semi-functional version
 * const modules = keys.reduce((acc, key) => {
 *   acc[key] = store[key].module
 *   return acc // without immutability
 *   return { ...acc } // with immutability
 * }, {})
 *
 * const plugins = keys.reduce((acc, key) => {
 *   acc.push(store[key].plugins)
 *   return acc // without immutability
 *   return [...acc] // with immutability
 * }).filter(plugin => isFunction(plugin))
 */
// end of extraction

// Shorthand for ‘modules: modules’
export default { modules }
