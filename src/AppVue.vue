<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
export default {
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
