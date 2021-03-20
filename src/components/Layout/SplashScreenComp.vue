<template>
  <div class="divSplashScreenComp">
    <img
      class="icon"
      id="icon"
      :src="imgSSIcon"
      alt="Icon: SplashSreen"
      onload="SVGInject(this)"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "splash-screen-comp",
  props: [],
  mounted() {},
  data() {
    return {
      imgSSIcon: require("@/assets/icons/icon_loading.svg"),
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      cmpMapStatusSplashScreen: "gettStatusSplashScreen",
    }),
  },
};
</script>

<style scoped>
.divSplashScreenComp {
  z-index: var(--sscomp-index);
  display: grid;
  justify-content: center;
  align-content: center;

  position: fixed;
  width: 100%;
  height: 100vh;

  background-color: #dbdada;
}

#icon {
  width: 100%;
  height: 100%;

  object-fit: contain;

  padding: 20%;

  fill: #ffffff;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
  transition: 0.5s ease-out;
  /* animation: logo-anim 1s linear infinite; */
}
</style>

<style>
.divSplashScreenComp:not(.ss-transition-leave-active) #icon #l {
  /* fill: blue; */
  animation: icon-item-anim 1.5s cubic-bezier(0.91, 0.16, 0.15, 0.82) 0.2s
    infinite;
  transform-origin: center;
  /* height: 50px; */
}

.divSplashScreenComp:not(.ss-transition-leave-active) #icon #c {
  /* fill: green; */
  animation: icon-item-anim 1.5s cubic-bezier(0.91, 0.16, 0.15, 0.82) 0.4s
    infinite;
  transform-origin: center;
}

.divSplashScreenComp:not(.ss-transition-leave-active) #icon #r {
  /* fill: red; */
  animation: icon-item-anim 1.5s cubic-bezier(0.91, 0.16, 0.15, 0.82) 0.6s
    infinite;
  transform-origin: center;
  /* height: 50px; */
}

@keyframes icon-item-anim {
  0%,
  100% {
    transform: scaleY(0.3);
  }
  50% {
    transform: scaleY(1);
  }
}

.divSplashScreenComp #icon #c {
  /* fill: green; */
  animation: icon-item-anim-2 0.3s ease;
  transform: scaleX(1.5);
  transform-origin: center;
}

@keyframes icon-item-anim-2 {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(1.5);
  }
}

.ss-transition-leave-active .icon {
  animation: icon-item-anim-end 1s ease-in;
  animation-delay: 0.4s;
}

@keyframes icon-item-anim-end {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(10);
    opacity: 0;
  }
}
</style>
