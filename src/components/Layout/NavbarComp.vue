<template>
  <div id="navbar" class="divNavbarComp">
    <a href="#" @click.prevent="mthGoArea('inicio')">Inicio</a>
    <a href="#" @click.prevent="mthGoArea('sobremi')">Sobre mi</a>
    <a href="#" @click.prevent="mthGoArea('servicios')">Servicios</a>
    <a href="#" @click.prevent="mthGoArea('proyectosrecientes')">Proyectos</a>
    <a href="#" @click.prevent="mthGoArea('tecnologias')">Tecnologias</a>
    <img class="menu" :src="imgClose" onload="SVGInject(this)">
  </div>
</template>

<script>
export default {
  name: "navbar-comp",
  props: [],
  mounted() {},
  data() {
    return {
      imgMenu: require("@/assets/icons/menu.svg"),
      imgClose: require("@/assets/icons/close-button.svg"),
    };
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
  grid-auto-flow: var(--navbar-grd-flow);
  grid-template-columns: var(--navbar-grd-columns);
  grid-template-rows: var(--navbar-grd-rows);
  justify-content: start;
  position: sticky;
  width: var(--navbar-width);
  top: var(--navbar-top);
  bottom: var(--navbar-bottom);
  left: var(--navbar-left);
  right: var(--navbar-right);
  justify-self: var(--navbar-justify-self);
  align-self: var(--navbar-align-self);
  text-align: end;
  background-color: rgba(0, 0, 0, 0.2);
}

#navbar a {
  text-decoration: none;
  color: #ffffff;
  padding: var(--navbar-a-pdd);
  font-weight: 600;
  font-size: 14px;
}

.menu {
  display: var(--navbar-menu-display);
  justify-content: center;
  align-content: center;
  align-self: center;
  justify-self: end;

  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;

  fill: #1e1e1e;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
}
</style>
