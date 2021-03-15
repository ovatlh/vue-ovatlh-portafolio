import Vue from "vue";
import AppVue from "./AppVue.vue";
import router from "./router";
import store from "./store";

import SVGInject from "@iconfu/svg-inject";
SVGInject.setOptions({
  makeIdsUnique: false, // do not make ids used within the SVG unique
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(AppVue),
}).$mount("#app");

Vue.use(SVGInject);
