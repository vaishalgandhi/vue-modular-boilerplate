require('dotenv').config()

const envVariables = {
  environment: process.env.VUE_APP_ENV,
  appUrl: process.env.VUE_APP_BASE_URL,
  appPort: process.env.VUE_APP_PORT,
  apiUrl: process.env.VUE_APP_API_URL,
  apiKey: process.env.VUE_APP_API_KEY
}

if (process.env.APP_ENV !== 'production') {
  // enabled logging for non production servers
  envVariables.logging = true
}

module.exports = envVariables
