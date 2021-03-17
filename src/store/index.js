import Vue from "vue";
import Vuex from "vuex";

// import modules
import module_proyectos from "./modules/module_proyectos.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    module_proyectos,
  },
  state: {},
  mutations: {},
  actions: {},
});
