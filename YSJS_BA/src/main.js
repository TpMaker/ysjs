// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './lib/layer/layer'
import ElementUI from 'element-ui';
import './lib/element/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(ElementUI)
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})