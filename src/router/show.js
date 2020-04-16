/*
 * @Description:
 * @Autor: yetm
 * @Date: 2020-03-23 15:38:14
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-15 17:21:54
 */
import Layout from "@/layout";
const showRouter = [
    {
        path: "/show",
        name: "showRouter",
        icon: 'el-icon-s-home',
        title: '导航一',
        component: Layout,
        children: [{
            path: "one",
            title: "分组一",
            name: "one",
            meta: {
                cached: true
            },
            // component: () => import("@/views/home")
        }]
    }];

export default showRouter;