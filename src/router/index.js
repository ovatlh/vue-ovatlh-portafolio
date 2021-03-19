import Vue from "vue";
import VueRouter from "vue-router";
import vuexstore from "@/store/";

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

router.beforeEach((to, from, next) => {
  // console.log("Cargando...");
  // console.log("from:" ,from);
  if (from.fullPath.includes("/home")) {
    if (!to.fullPath.includes("/home")) {
      console.log("Page from to: Other");
      // alert("Other");
      vuexstore.dispatch("actToggleCambioPagina", { status: true }).then(() => {
        next();
      });
    } else {
      next();
    }
    // else {
    //   console.log("Page from to: Home");
    // }
  } else {
    console.log("Page to: Other");
    // alert("Other");
    vuexstore.dispatch("actToggleCambioPagina", { status: true }).then(() => {
      next();
    });
    // if (!to.fullPath.includes("/home")) {
    //   console.log("Page to: Other");
    // } else {
    //   console.log("Page to: Home");
    // }
  }
  // console.log("to:" ,to);

  // next();
});

router.afterEach(() => {
  // console.log("Terminado...");
  vuexstore.dispatch("actToggleCambioPagina", { status: false });
});

export default router;
