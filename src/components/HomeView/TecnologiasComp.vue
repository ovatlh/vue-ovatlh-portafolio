<template>
  <div class="divTecnologiasComp" id="tecnologias">
    <h1 class="title">Tecnologías</h1>

    <div class="list">
      <div class="item" v-for="(tec, index) in list_tecnologias" :key="index">
        <img class="img" :src="tec.img" :alt="tec.nombre" />
        <h5 class="nombre">{{ tec.nombre }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tecnologias-comp",
  props: [],
  mounted() {},
  data() {
    return {
      list_tecnologias: [
        {
          img: require("@/assets/logos/logo_mysql.png"),
          nombre: "MySQL",
        },
        {
          img: require("@/assets/logos/logo_net_core.png"),
          nombre: ".NET Core",
        },
        {
          img: require("@/assets/logos/logo_csharp.png"),
          nombre: "C#",
        },
        {
          img: require("@/assets/logos/logo_vuejs.png"),
          nombre: "Vue.js",
        },
        {
          img: require("@/assets/logos/logo_html.png"),
          nombre: "HTML 5",
        },
        {
          img: require("@/assets/logos/logo_css.png"),
          nombre: "CSS 3",
        },
        {
          img: require("@/assets/logos/logo_js.png"),
          nombre: "Javascript",
        },
        {
          img: require("@/assets/logos/logo_xamarin.png"),
          nombre: "Xamarin Forms",
        },
        {
          img: require("@/assets/logos/logo_illustrator.png"),
          nombre: "Adobe Illustrator",
        },
        {
          img: require("@/assets/logos/logo_xd.png"),
          nombre: "Adobe Xd",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divTecnologiasComp {
  z-index: 5;
  display: grid;
  gap: 20px;
  padding: var(--tecnologiascomp-pdd);
  grid-template-areas: "Title" "List";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-content: start;

  background-color: #ffffff;
}

.title {
  text-align: center;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--tecnologiascomp-list-gap);
  justify-self: center;
  justify-content: center;
}

.item {
  display: grid;
  grid-template-areas: "Img" "Nombre";
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;

  width: 100px;
  height: 130px;

  justify-items: center;
  align-items: center;
}

.img {
  grid-area: Img;
  object-fit: contain;
  min-width: 80%;
  max-width: 80%;
  min-height: 80%;
  max-height: 80%;
}

.nombre {
  grid-area: Nombre;
  width: 100px;
  padding: 0 10px;
  text-align: center;
}
</style>
