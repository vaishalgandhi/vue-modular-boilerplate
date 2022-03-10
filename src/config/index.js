require('dotenv').config()
import envVariables from './environment'
import appConfig from './app.config.json'

// merge the two config files together
// the envVariables will overwrite properties
// on the appConfig object
export default { ...appConfig, ...envVariables }
