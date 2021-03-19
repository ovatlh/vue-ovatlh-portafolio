<template>
  <div id="app" class="app">
    <NavbarComp />
    <NavbarMovilComp />

    <router-view />

    <!-- <PageTransitionComp v-if="cmpMapShowCambioPagina" /> -->
    <transition name="page-transition" mode="in-out" :duration="500">
      <PageTransitionComp v-if="cmpMapShowCambioPagina" key="pagetransition" />
    </transition>
  </div>
</template>

<script>
import NavbarComp from "@/components/Layout/NavbarComp.vue";
import NavbarMovilComp from "@/components/Layout/NavbarMovilComp.vue";
import PageTransitionComp from "@/components/Layout/PageTransitionComp.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    NavbarComp,
    NavbarMovilComp,
    PageTransitionComp,
  },
  name: "app-vue",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      cmpMapShowCambioPagina: "gettShowCambioPagina",
    }),
  },
};
</script>

<style src="@/assets/css/main-css.css"></style>

<style scoped>
#app {
  display: grid;
  grid-template-areas: "AppVue";
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  align-content: start;
  min-height: 100vh;
}

.page-transition-enter-active {
  animation: pt-in 0.5s ease-out;
  animation-delay: 0.0s;
}

.page-transition-leave-active {
  animation: pt-out 0.5s ease-in;
  animation-delay: 0.0s;
}

@keyframes pt-in {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes pt-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
