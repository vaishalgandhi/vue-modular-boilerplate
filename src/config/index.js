import envVariables from './environment'
import appConfig from './app'

// merge the two config files together
// the envVariables will overwrite properties
// on the appConfig object
export default { ...appConfig, ...envVariables }
