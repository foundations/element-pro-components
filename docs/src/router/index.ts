import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
  Router,
} from 'vue-router'
import zhCN from './zh-CN'
import type { IRouteRecordRaw } from '/@src/index'

const routes: IRouteRecordRaw[] = [...zhCN]

export function createRouter(): Router {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })
}
