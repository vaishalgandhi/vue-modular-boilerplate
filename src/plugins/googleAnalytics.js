import Vue from 'vue'
import router from '@/router'
import VueAnalytics from 'vue-analytics'
import appConfig from '@/config'

if (appConfig.environment === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-138050457-1',
    router
  })
}
