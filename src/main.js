/*
 * @Description: 入口文件
 * @Autor: yetm
 * @Date: 2020-03-23 14:11:56
 * @LastEditors: yetm
 * @LastEditTime: 2020-03-31 09:37:52
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')