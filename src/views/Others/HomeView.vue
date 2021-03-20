<template>
  <div class="divHomeView">
    <PortadaComp />
    <SobreMiComp />
    <ServiciosComp />
    <ProyectosComp />
    <TecnologiasComp />
    <FooterComp />
  </div>
</template>

<script>
import PortadaComp from "@/components/HomeView/PortadaComp.vue";
import SobreMiComp from "@/components/HomeView/SobreMiComp.vue";
import ServiciosComp from "@/components/HomeView/ServiciosComp.vue";
import ProyectosComp from "@/components/HomeView/ProyectosComp.vue";
import TecnologiasComp from "@/components/HomeView/TecnologiasComp.vue";
import FooterComp from "@/components/HomeView/FooterComp.vue";

export default {
  components: {
    PortadaComp,
    SobreMiComp,
    ServiciosComp,
    ProyectosComp,
    TecnologiasComp,
    FooterComp,
  },
  name: "home-view",
  props: [],
  beforeCreate(){
    // document.body.style.scrollBehavior = "smooth";
    // document.getElementsByTagName("body")[0].style.scrollBehavior = 'smooth';
  },
  beforeDestroy() {
    // document.body.style.scrollBehavior = "auto";
    // document.getElementsByTagName("body")[0].style.scrollBehavior = 'auto';
  },
  mounted() {
    document.title = "Inicio | @ovatlh";
  },
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
  grid-area: AppVue;

  background-color: var(--homeview-bg);
  color: var(--homeview-clr);
  min-height: var(--homeview-minheight);

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  align-content: start;
}
</style>
