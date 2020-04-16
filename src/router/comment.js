/*
 * @Description: 
 * @Autor: islilinn
 * @Date: 2020-03-27 15:56:42
 * @LastEditors: yetm
 * @LastEditTime: 2020-04-14 14:51:13
 */
const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录',
  },
  component: () => import('@/views/login'),
};
export {
  loginRouter
}
