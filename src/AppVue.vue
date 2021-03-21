<template>
  <div id="app" class="app">
    <NavbarComp />
    <NavbarMovilComp />

    <router-view />

    <!-- <PageTransitionComp v-if="cmpMapShowCambioPagina" /> -->
    <transition name="page-transition" mode="in-out" :duration="500">
      <PageTransitionComp v-if="cmpMapShowCambioPagina" key="pagetransition" />
    </transition>

    <transition
      name="ss-transition"
      mode="in-out"
      :duration="{ enter: 1, leave: 1300 }"
    >
      <SplashScreenComp v-if="cmpMapStatusSplashScreen" key="sstransition" />
    </transition>

    <transition
      name="contact-transition"
      mode="in-out"
      :duration="{ enter: 400, leave: 400 }"
    >
      <ContactComp v-if="cmpMapStatusContact" />
    </transition>
  </div>
</template>

<script>
import NavbarComp from "@/components/Layout/NavbarComp.vue";
import NavbarMovilComp from "@/components/Layout/NavbarMovilComp.vue";
import PageTransitionComp from "@/components/Layout/PageTransitionComp.vue";
import SplashScreenComp from "@/components/Layout/SplashScreenComp.vue";
import ContactComp from "@/components/Others/ContactComp.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    NavbarComp,
    NavbarMovilComp,
    PageTransitionComp,
    SplashScreenComp,
    ContactComp,
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
      cmpMapStatusSplashScreen: "gettStatusSplashScreen",
      cmpMapStatusContact: "gettStatusContact",
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
  animation-delay: 0s;
}

.page-transition-leave-active {
  animation: pt-out 0.5s ease-in;
  animation-delay: 0s;
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

.ss-transition-leave-active {
  animation: ss-out 0.5s ease-out;
  animation-delay: 1s;
}

@keyframes ss-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.contact-transition-enter-active {
  animation: contact-in 0.5s ease-out;
}

.contact-transition-leave-active {
  animation: contact-out 0.5s ease-out;
}

@keyframes contact-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes contact-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
