import 'vant/es/toast/style'
import 'vant/es/dialog/style'

import Header from './theheader.vue'
import Banner from './banner.vue'
import NoticeBar from './noticeBar.vue'
import ParticleBg from './particle_bg.vue'
import thefooter from './Footer.vue'
import MobileNav from './mobile_nav.vue'
// import Icon from './Icon/index.vue'
// import Button from './Button/index.vue'
// import ImageBox from './ImageBox/index.vue'
// import Cell from './Cell/index.vue'
// import Field from './Field/index.vue'
// import Table from './Table/index.vue'
// import Select from './Select/index.vue'

export default (Vue) => {
    Vue.component('theheader', Header)
    Vue.component('banner', Banner)
    Vue.component('noticeBar', NoticeBar)
    Vue.component('particleBg', ParticleBg)
    Vue.component('thefooter', thefooter)
    Vue.component('MobileNav', MobileNav)
    // Vue.component('c-icon', Icon)
    // Vue.component('c-button', Button)
    // Vue.component('c-image-box', ImageBox)
    // Vue.component('c-cell', Cell)
    // Vue.component('c-field', Field)
    // Vue.component('c-table', Table)
    // Vue.component('c-select', Select)
}
