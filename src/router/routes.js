import about from "@/views/About.vue";
// import home from "@/views/Home.vue";

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
    components: { "route-app": about }
  },
  {
    path: "/home",
    name: "home",
    components: {
      "route-app": () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue")
    }
  }
];
