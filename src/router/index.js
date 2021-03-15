import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    alias: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "chunckHomeView" */ "../views/Others/HomeView.vue"
      ),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "chunkNotFoundView" */ "../views/Others/NotFoundView.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
