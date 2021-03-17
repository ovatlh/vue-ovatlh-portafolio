<template>
  <div id="app" class="app">
    <NavbarComp />
    <NavbarMovilComp />
    <router-view />
  </div>
</template>

<script>
import NavbarComp from "@/components/Layout/NavbarComp.vue";
import NavbarMovilComp from "@/components/Layout/NavbarMovilComp.vue";

export default {
  components: {
    NavbarComp,
    NavbarMovilComp,
  },
  name: "app-vue",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
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
</style>
