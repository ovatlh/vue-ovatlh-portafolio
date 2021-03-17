<template>
  <div class="divHomeView">
    <PortadaComp />
    <SobreMiComp />
    <ServiciosComp />
    <ProyectosComp />
    <TecnologiasComp />
  </div>
</template>

<script>
import PortadaComp from "@/components/HomeView/PortadaComp.vue";
import SobreMiComp from "@/components/HomeView/SobreMiComp.vue";
import ServiciosComp from "@/components/HomeView/ServiciosComp.vue";
import ProyectosComp from "@/components/HomeView/ProyectosComp.vue";
import TecnologiasComp from "@/components/HomeView/TecnologiasComp.vue";

export default {
  components: {
    PortadaComp,
    SobreMiComp,
    ServiciosComp,
    ProyectosComp,
    TecnologiasComp,
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
