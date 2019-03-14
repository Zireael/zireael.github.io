import about from "@/views/About.vue";
import home from "@/views/Home.vue";

export const routes = [
  {
    path: "*", // 404 redirect
    redirect: "/"
  },
  {
    path: "/", // root default redirect
    redirect: "/home"
  },
  {
    path: "/about",
    name: "about",
    component: about
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  }
];
