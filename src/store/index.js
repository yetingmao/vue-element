/*
 * @Description: vuex
 * @Autor: yetm
 * @Date: 2020-03-23 14:11:56
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-16 08:48:44
 */
import Vue from 'vue';
import Vuex from 'vuex';
import showRouter from "@/router/show";
import otherRouter from "@/router/other"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuList: [],
        breadCrumbList: []
    },
    mutations: {
        /**
         * @description: 更新菜单
         * @param {type} 
         * @return: 
         * @author: yetm
         */
        updateMenulist(state, payload) {
            const { menu } = payload;
            state.menuList = [...showRouter, ...menu];
        },
        /**
         * @description: 更新面包屑
         * @param {type} 
         * @return: 
         * @author: yetm
         */
        updateBreadCrumb(state, payload) {
            const { name } = payload;
            if (name === "home") {
                state.breadCrumbList = [];
                return;
            }
            let arr = [];
            for (const item of showRouter) {
                for (const item1 of item.children) {
                    if (item1.name === name) {
                        arr = [
                            { name: item.name, title: item.title },
                            { name: item1.name, title: item1.title }
                        ];
                    }
                    if (arr.length) {
                        break;
                    }
                    if (item1.children) {
                        for (const item2 of item1.children) {
                            if (item2.name === name) {
                                arr = [
                                    { name: item.name, title: item.title },
                                    { name: item1.name, title: item1.title },
                                    { name: item2.name, title: item2.title }
                                ];
                            }
                            if (arr.length) {
                                break;
                            }
                        }
                    }
                }
            }
            if (arr.length === 0) {
                for (const item of otherRouter.children) {
                    if (item.name === name) {
                        arr = [{ name: item.name, title: item.title }];
                    }
                }
            }
            state.breadCrumbList = [...arr];
        },
    },
    actions: {},
    modules: {}
})