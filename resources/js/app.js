import Vue from 'vue'
import VueClipboards from 'vue-clipboards'
import VueQrcode from '@xkeshi/vue-qrcode'

Vue.use(VueClipboards)

Vue.component(VueQrcode.name, VueQrcode)
Vue.component('example-component', require('./components/ExampleComponent.vue'))
Vue.component('example-component-2', require('./components/ExampleComponent2.vue'))
Vue.component('example-component-3', require('./components/ExampleComponent3.vue'))

new Vue({
    el: '#app'
})
