import Vue from "vue";
import Vuex from "vuex";

// import modules
import module_proyectos from "./modules/module_proyectos.js";
import module_cambio_pagina from "./modules/module_cambio_pagina.js";
import module_splashscreen from "./modules/module_splashscreen.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    module_proyectos,
    module_cambio_pagina,
    module_splashscreen,
  },
  state: {},
  mutations: {},
  actions: {},
});
