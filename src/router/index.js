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
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }

    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeResolve((to, from, next) => {
  // if (from.fullPath.includes("/home") || from.path === "/") {
  //   if (to.fullPath.includes("/home")) {
  //     next();
  //   } else {
  //     setTimeout(function() {
  //       next();
  //     }, 400);

  //     vuexstore.dispatch("actToggleCambioPagina", { status: true });

  //     setTimeout(function() {
  //       vuexstore.dispatch("actToggleCenterCambioPagina", { status: true });
  //     }, 300);
  //   }
  // } else {
  //   setTimeout(function() {
  //     next();
  //   }, 400);

  //   vuexstore.dispatch("actToggleCambioPagina", { status: true });

  //   setTimeout(function() {
  //     vuexstore.dispatch("actToggleCenterCambioPagina", { status: true });
  //   }, 300);
  // }

  // switch (from.path) {
  //   case "/":
  //     next();
  //     break;
  //   case "/home":
  //     next();
  //     break;
  //   default:
  //     setTimeout(function() {
  //       next();
  //     }, 400);

  //     vuexstore.dispatch("actToggleCambioPagina", { status: true });

  //     setTimeout(function() {
  //       vuexstore.dispatch("actToggleCenterCambioPagina", { status: true });
  //     }, 300);
  //     break;
  // }

  if (
    (from.path === "/" || from.path === "/home") &&
    (to.path === "/" || to.path === "/home")
  ) {
    next();
  } else {
    setTimeout(function() {
      next();
    }, 400);

    vuexstore.dispatch("actToggleCambioPagina", { status: true });

    setTimeout(function() {
      vuexstore.dispatch("actToggleCenterCambioPagina", { status: true });
    }, 300);
  }
});

router.afterEach(() => {
  setTimeout(function() {
    vuexstore.dispatch("actToggleCenterCambioPagina", { status: false });
  }, 1);
  vuexstore.dispatch("actToggleCambioPagina", { status: false });

  vuexstore.dispatch("actToggleSplashScreen", { status: false });
});

export default router;
