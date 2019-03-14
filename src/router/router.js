import Vue from "vue";
import Router from "vue-router";
import { routes } from "@/router/routes.js";

Vue.use(Router);

export default new Router({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // https://dev.to/napoleon039/the-lesser-known-amazing-things-vuerouter-can-do-25di
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
