<template>
  <div id="navbar" class="divNavbarComp">
    <router-link :to="{ name: 'Home', hash: '#inicio' }">Inicio</router-link>
    <router-link :to="{ name: 'Home', hash: '#sobremi' }">Sobre mi</router-link>
    <router-link :to="{ name: 'Home', hash: '#servicios' }"
      >Servicios</router-link
    >
    <router-link :to="{ name: 'Home', hash: '#proyectos' }"
      >Proyectos</router-link
    >
    <router-link :to="{ name: 'Home', hash: '#tecnologias' }"
      >Tecnologías</router-link
    >
    <div class="divContact" @click="mthToggleContact">
      Contacto
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "navbar-comp",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      mthMapToggleContact: "actToggleContact",
    }),
    mthToggleContact() {
      this.mthMapToggleContact({ status: true });
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
  position: fixed;
  width: 100%;
  height: var(--navbar-desktop-height);
  top: 0;
  left: 0;
  justify-self: start;
  align-self: start;
  background-color: rgba(0, 0, 0, 0.2);

  user-select: none;
}

#navbar a, #navbar .divContact {
  text-decoration: none;
  color: #ffffff;
  padding: var(--navbar-a-pdd);
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
  
  cursor: pointer;
}

#navbar a:hover, #navbar .divContact:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
