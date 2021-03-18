<template>
  <div class="divProyectosView">
    <div class="top">
      <h1 class="title">Proyectos</h1>
      <p>
        Estos son los proyectos en los que he trabajado para algunas empresas y
        otros los he desarrollado por mi cuenta.
      </p>
    </div>

    <div class="list">
      <router-link
        v-for="(proyecto, index) in cmpMapListProyectos"
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
    </div>

    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "@/components/HomeView/FooterComp.vue";

import { mapGetters } from "vuex";
export default {
  components: {
    FooterComp,
  },
  name: "proyectos-view",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      cmpMapListProyectos: "gettListProyectos",
    }),
  },
};
</script>

<style scoped>
.divProyectosView {
  z-index: var(--view-index);
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  align-content: start;

  background-color: var(--proyectosview-bg);
  color: var(--proyectosview-clr);
}

.top {
  padding: var(--navbar-desktop-height) var(--proyectosview-pdd);
}

.list {
  min-height: var(--proyectosview-minheight);
  display: flex;
  padding: 0 var(--proyectosview-pdd) var(--proyectosview-pdd) var(--proyectosview-pdd);
  gap: var(--proyectoscomp-list-gap);
  flex-wrap: wrap;
  justify-self: start;
  justify-content: center;
  align-items: start;
  align-content: start;
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
</style>
