<template>
  <div class="divServiciosComp">
    <h1 class="title">Servicios</h1>

    <div class="list">
      <div class="item">
        <img class="imgItem" :src="iconMySQL" onload="SVGInject(this)">

        <div class="content">
          <h2>Bases de Datos</h2>
          <p>Diseño y Administracion de bases de datos MySQL</p>
        </div>
      </div>
      
      <div class="item">
        <img class="imgItem" :src="iconAPI" onload="SVGInject(this)">

        <div class="content">
          <h2>Back-end</h2>
          <p>Web API RESTful con .NET Core</p>
        </div>
      </div>
      
      <div class="item">
        <img class="imgItem" :src="iconWeb" onload="SVGInject(this)">

        <div class="content">
          <h2>Front-end</h2>
          <p>Paginas web con HTML, CSS y JS</p>
          <p>Aplicaciones web (SPA) con Vue.js</p>
        </div>
      </div>
      
      <div class="item">
        <img class="imgItem" :src="iconLayout" onload="SVGInject(this)">

        <div class="content">
          <h2>UI/UX</h2>
          <p>Creación de diseños interactivos de UI/UX  para una experiencia de usuario sencilla y fluida</p>
        </div>
      </div>
      
      <div class="item">
        <img class="imgItem" :src="iconPhone" onload="SVGInject(this)">

        <div class="content">
          <h2>Aplicaciones Móviles</h2>
          <p>Aplicaciones con Xamarin.Forms para móviles Android y iOS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "servicios-comp",
  props: [],
  mounted() {},
  data() {
    return {
      iconMySQL: require("@/assets/icons/mysql.svg"),
      iconAPI: require("@/assets/icons/api.svg"),
      iconWeb: require("@/assets/icons/web.svg"),
      iconLayout: require("@/assets/icons/layout.svg"),
      iconPhone: require("@/assets/icons/phone.svg"),
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divServiciosComp {
  z-index: 3;
  display: grid;
  gap: 20px;
  grid-template-areas: "Servicios" "List";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-items: start;

  overflow: hidden;
  padding: var(--servicioscomp-pdd);
}

.title {
  grid-area: Servicios;
  z-index: 1;
  text-align: center;
}

.list {
  grid-area: List;
  z-index: 2;

  justify-self: center;
  align-self: center;
  
  display: flex;
  flex-wrap: wrap;
  gap: var(--servicioscomp-list-gap);
  justify-content: center;
  align-items: start;
}

.item {
  display: grid;
  gap: 10px;
  grid-template-areas: "Icon Content";
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  min-height: 110px;
  min-width: 300px;
  max-width: 310px;
}

.imgItem {
  min-width: 35px;
  max-width: 35px;
  min-height: 35px;
  max-height: 35px;
  align-self: center;

  fill: #1e1e1e;
}

/* .content > h2 {
  text-align: center;
} */

.content > p {
  font-size: 14px;
}
</style>
