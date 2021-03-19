<template>
  <div class="divPageTransitionComp">
    <h1>page-transition-comp Component</h1>
  </div>
</template>

<script>
export default {
  name: "page-transition-comp",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divPageTransitionComp{
  z-index: var(--ptcomp-index);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  background-color: rgb(12, 41, 10);
}
</style>
