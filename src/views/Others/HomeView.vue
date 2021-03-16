<template>
  <div class="divHomeView">
    <PortadaComp />
    <SobreMiComp />
    <ServiciosComp />
  </div>
</template>

<script>
import PortadaComp from "@/components/HomeView/PortadaComp.vue";
import SobreMiComp from "@/components/HomeView/SobreMiComp.vue";
import ServiciosComp from "@/components/HomeView/ServiciosComp.vue";

export default {
  components: {
    PortadaComp,
    SobreMiComp,
    ServiciosComp,
  },
  name: "home-view",
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
.divHomeView {
  z-index: var(--view-index);

  background-color: var(--homeview-bg);
  color: var(--homeview-clr);
  min-height: var(--homeview-minheight);

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  align-content: start;
}
</style>
