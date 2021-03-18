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
    path: "/proyectos/",
    name: "ProyectosTodos",
    component: () =>
      import(
        /* webpackChunkName: "chunckProyectosView" */ "../views/Proyectos/ProyectosView.vue"
      ),
  },
  {
    path: "/proyectos/fcasabinas",
    name: "FCASabinas",
    component: () =>
      import(
        /* webpackChunkName: "chunckProyectoFCASabinasView" */ "../views/Proyectos/Proyecto/FCASabinasView.vue"
      ),
  },
  {
    path: "/proyectos/myanimesearcher",
    name: "MyAnimeSearcher",
    component: () =>
      import(
        /* webpackChunkName: "chunckProyectoMyAnimeSearcherView" */ "../views/Proyectos/Proyecto/MyAnimeSearcherView.vue"
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
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

export default router;
