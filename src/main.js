import Vue from 'vue'
import App from './App.vue'
import WebRTC from 'vue-webrtc'

Vue.config.productionTip = false

Vue.use(WebRTC)

new Vue({
  render: h => h(App),
}).$mount('#app')
