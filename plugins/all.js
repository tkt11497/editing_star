import { allowMultipleToast, setToastDefaultOptions } from 'vant'
import { Lazyload } from 'vant'
import Vant from 'vant'
import 'vant/lib/index.css'

allowMultipleToast()
setToastDefaultOptions('loading', { duration: 0 })

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vant)
  nuxtApp.vueApp.use(Lazyload, {
    lazyComponent: true
  })
})