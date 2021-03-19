<template>
  <div class="divPageTransitionComp" :class="{ 'center': cmpMapCenterCambioPagina }">
    <div class="clr1"></div>
    <div class="clr2"></div>
    <div class="clr3"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "page-transition-comp",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      cmpMapCenterCambioPagina: "gettCenterCambioPagina",
    }),
  },
};
</script>

<style scoped>
.divPageTransitionComp {
  z-index: var(--ptcomp-index);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: "PageTransition";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.clr1,
.clr2,
.clr3 {
  grid-area: PageTransition;
  transform: translateX(-100%);
}

.clr1 {
  z-index: 1;
  background-color: #f5f5f5;
  /* transform: translateX(-100%); */
}

.clr2 {
  z-index: 2;
  background-color: #808080;
  /* transform: translateX(-100%); */
}

.clr3 {
  z-index: 3;
  background-color: #1e1e1e;
  /* transform: translateX(-100%); */
}

.page-transition-enter-active .clr1 {
  animation: clr-in 0.2s ease-out;
  animation-delay: 0s;
}

.page-transition-enter-active .clr2 {
  animation: clr-in 0.2s ease-out;
  animation-delay: 0.1s;
}

.page-transition-enter-active .clr3 {
  animation: clr-in 0.2s ease-out;
  animation-delay: 0.2s;
}

.page-transition-leave-active .clr1 {
  animation: clr-out 0.2s ease-in;
  animation-delay: 0.2s;
}

.page-transition-leave-active .clr2 {
  animation: clr-out 0.2s ease-in;
  animation-delay: 0.1s;
}

.page-transition-leave-active .clr3 {
  animation: clr-out 0.2s ease-in;
  animation-delay: 0s;
}

/* .page-transition-enter-to .clr1,
.page-transition-enter-to .clr2,
.page-transition-enter-to .clr3,
.page-transition-leave .clr1,
.page-transition-leave .clr2,
.page-transition-leave .clr3 {
  transform: translateX(0%);
} */

.center .clr1,
.center .clr2,
.center .clr3 {
  transform: translateX(0%);
}

@keyframes clr-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes clr-out {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
