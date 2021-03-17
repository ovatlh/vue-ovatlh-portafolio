<template>
  <div class="divFooterComp">
    <h5>Creado con 💖 por Tavo López Hernández</h5>
  </div>
</template>

<script>
export default {
  name: "footer-comp",
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
.divFooterComp {
  display: grid;
  padding: 50px;
  justify-content: center;
  align-content: center;

  background-color: #1e1e1e;
  color: #ffffff;
  height: var(--footercomp-height);
}
</style>
