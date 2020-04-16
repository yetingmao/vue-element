/*
 * @Description: 
 * @Autor: yetm
 * @Date: 2020-03-23 14:11:56
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-15 16:42:38
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import showRouter from './show';
import otherRouter from './other';
import { loginRouter } from './comment';
Vue.use(VueRouter)
const RouterConfig = {
    // mode: 'history',
    //base: process.env.BASE_URL,
    routes: [
        otherRouter,
        ...showRouter,
        loginRouter,
    ],
};

const router = new VueRouter(RouterConfig)

export default router