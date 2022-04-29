import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import components from './cases/index'

const routes: RouteRecordRaw[] = [...components]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
