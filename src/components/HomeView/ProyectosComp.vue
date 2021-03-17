<template>
  <div class="divProyectosComp" id="proyectosrecientes">
    <h1 class="title">Proyectos</h1>

    <div class="list">
      <router-link
        v-for="(proyecto, index) in cmpUltimos2Proyectos"
        :key="index"
        class="item proyecto"
        :to="proyecto.link"
        :title="proyecto.title"
      >
        <div class="content">
          <img class="img" :src="proyecto.img" :alt="proyecto.nombre" />
          <h4 class="title">{{ proyecto.nombre }}</h4>
        </div>
        <div class="hover">
          <p>Ver</p>
        </div>
      </router-link>

      <router-link
        class="item ver-todos"
        to="/proyectos"
        title="Ver todos los proyectos"
      >
        <div class="content">
          <img class="img" :src="iconEnter" onload="SVGInject(this)" />
          <h3 class="title">Ver todos</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "proyectos-comp",
  props: [],
  mounted() {},
  data() {
    return {
      iconEnter: require("@/assets/icons/enter.svg"),
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      cmpMapListProyectos: "gettListProyectos",
    }),
    cmpUltimos2Proyectos() {
      return this.cmpMapListProyectos.slice(0, 2);
    },
  },
};
</script>

<style scoped>
.divProyectosComp {
  z-index: 4;
  display: grid;
  gap: 20px;
  padding: var(--proyectoscomp-pdd);
  grid-template-areas: "Proyectos" "List";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-items: start;

  overflow: hidden;
}

.title {
  grid-area: Proyectos;
  text-align: center;
}

.list {
  grid-area: List;

  display: flex;
  flex-wrap: wrap;
  justify-self: center;
  justify-content: center;
  align-items: start;
  gap: var(--proyectoscomp-list-gap);
}

.item {
  display: grid;
  grid-template-areas: "Item";
  background-color: #fff;
  text-decoration: none;
  color: #1e1e1e;
  min-width: 300px;
  max-width: 300px;
  min-height: 150px;
  border-radius: 10px;
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.16);
  overflow: hidden;

  user-select: none;

  transition: 0.1s ease-out;
}

.item:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 12px 9px -6px rgba(0, 0, 0, 0.3);
}

.proyecto .content {
  grid-area: Item;
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-areas: "Img Title";
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
}

.proyecto .content .img {
  grid-area: Img;

  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;

  object-fit: contain;
}

.proyecto .content .title {
  grid-area: Title;
}

.proyecto .hover {
  grid-area: Item;
  display: grid;
  justify-content: center;
  align-content: end;
  background-color: rgba(0, 0, 0, 0.5);

  opacity: 0;

  transition: 0.1s ease-out;
}

.proyecto:hover .hover {
  opacity: 1;
}

.proyecto .hover > p {
  color: #ffffff;
  font-weight: 600;
  padding: 10px;
  transform: translateY(100%);

  transition: 0.2s ease-out;
}

.proyecto:hover .hover > p {
  transform: translateY(0%);
}

.ver-todos .content {
  display: grid;
  padding: 10px;
  gap: 20px;
  grid-template-areas: "Img Title";
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-self: center;
}

.ver-todos .content .img {
  grid-area: Img;
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
  justify-self: center;

  fill: #1e1e1e;
}

.ver-todos .content .title {
  grid-area: Title;
}
</style>
