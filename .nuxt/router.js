import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _58db99e4 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _725dfa19 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _4cccdd22 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _9abc7ba2 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _32d6945d = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _4d0cc027 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _cd27f508 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _58db99e4,
    children: [{
      path: "",
      component: _725dfa19,
      name: "home"
    }, {
      path: "/login",
      component: _4cccdd22,
      name: "login"
    }, {
      path: "/register",
      component: _4cccdd22,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _9abc7ba2,
      name: "profile"
    }, {
      path: "/settings",
      component: _32d6945d,
      name: "settings"
    }, {
      path: "/editor",
      component: _4d0cc027,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _cd27f508,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
