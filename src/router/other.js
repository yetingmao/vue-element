/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-04-14 14:30:17
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-16 09:41:49
 */
import Layout from "@/layout";
const otherRouter = {
    path: "/",
    redirect: '/home',
    name: 'otherRouter',
    component: Layout,
    children: [{
        path: "home",
        title: "主页",
        name: "home",
        meta: {
            cached: true
        },
        component: () => import('@/views/home'),
    },
    {
        path: "user",
        title: "个人中心",
        name: "user",
        meta: {
            cached: true
        },
        component: () => import('@/views/user'),
    }]
};
export default otherRouter;