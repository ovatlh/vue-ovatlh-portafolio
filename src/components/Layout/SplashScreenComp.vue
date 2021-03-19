<template>
  <div class="divSplashScreenComp">
    <img class="logo" :src="imgSSLogo" alt="Logo: SplashSreen">
  </div>
</template>

<script>
export default {
  name: "splash-screen-comp",
  props: [],
  mounted() {},
  data() {
    return {
      imgSSLogo: require("@/assets/imgs/profile_picture_01.jpg"),
    };
  },
  methods: {},
  computed: {},
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

  background-color: rgba(0, 0, 0, 0.3);
}

.logo {
  width: 100%;
  height: 100%;

  object-fit: contain;

  padding: 20%;

  animation: logo-anim 1s linear infinite;
}

@keyframes logo-anim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
