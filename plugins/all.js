import { allowMultipleToast, setToastDefaultOptions } from 'vant'
import { Lazyload } from 'vant'
import Vant from 'vant'
import 'vant/lib/index.css'

import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"; 
import VueApexCharts from "vue3-apexcharts";
allowMultipleToast()
setToastDefaultOptions('loading', { duration: 0 })

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vant)
  nuxtApp.vueApp.use(Lazyload, {
    lazyComponent: true
  })
  nuxtApp.vueApp.use(VueApexCharts)
  nuxtApp.vueApp.use(Particles, {
    init: async engine => {
      await loadFull(engine); 
    },
  })
})