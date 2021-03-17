<template>
  <div id="navbar" class="divNavbarComp">
    <a href="#" @click.prevent="mthGoArea('inicio')">Inicio</a>
    <a href="#" @click.prevent="mthGoArea('sobremi')">Sobre mi</a>
    <a href="#" @click.prevent="mthGoArea('servicios')">Servicios</a>
    <a href="#" @click.prevent="mthGoArea('proyectosrecientes')">Proyectos</a>
    <a href="#" @click.prevent="mthGoArea('tecnologias')">Tecnologias</a>
  </div>
</template>

<script>
export default {
  name: "navbar-comp",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    mthGoArea(areaID) {
      var area = document.getElementById(areaID);
      area.scrollIntoView();
    },
  },
  computed: {},
};
</script>

<style scoped>
#navbar {
  z-index: var(--navbar-index);
  grid-area: AppVue;

  display: var(--navbar-desktop);
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  justify-content: start;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  justify-self: start;
  align-self: start;
  background-color: rgba(0, 0, 0, 0.2);

  user-select: none;
}

#navbar a {
  text-decoration: none;
  color: #ffffff;
  padding: var(--navbar-a-pdd);
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
}

#navbar a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
