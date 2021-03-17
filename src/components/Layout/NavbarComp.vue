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

  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  justify-content: start;
  position: sticky;
  width: calc(100%);
  left: 0;
  top: 0;
  align-self: start;
  background-color: rgba(0, 0, 0, 0.2);
}

#navbar a {
  text-decoration: none;
  color: #ffffff;
  padding: 10px 5px;
  font-weight: 600;
  font-size: 14px;
}
</style>
