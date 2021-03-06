import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Input, Affix, Tag } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Input)
Vue.use(Affix)
Vue.use(Tag)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
