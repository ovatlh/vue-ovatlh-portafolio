<template>
  <div id="navbarmovil" class="divNavbarMovilComp">
    <transition-group name="navbar-items">
      <router-link
        v-if="menu_active"
        key="inicio"
        :to="{ name: 'Home', hash: '#inicio' }"
        >Inicio</router-link
      >
      <router-link
        v-if="menu_active"
        key="sobremi"
        :to="{ name: 'Home', hash: '#sobremi' }"
        >Sobre mi</router-link
      >
      <router-link
        v-if="menu_active"
        key="servicios"
        :to="{ name: 'Home', hash: '#servicios' }"
        >Servicios</router-link
      >
      <router-link
        v-if="menu_active"
        key="proyectos"
        :to="{ name: 'Home', hash: '#proyectos' }"
        >Proyectos</router-link
      >
      <router-link
        v-if="menu_active"
        key="tecnologias"
        :to="{ name: 'Home', hash: '#tecnologias' }"
        >Tecnologías</router-link
      >
      <div class="divContact" v-if="menu_active" key="contacto" @click="mthToggleContact"
        >Contacto</div
      >
    </transition-group>

    <div class="menu" @click="mthToogleMenu">
      <div class="iconMenu" :class="{ showIcon: cmpShowMenuIcon }">
        <img id="menu" :src="imgMenu" onload="SVGInject(this)" />
      </div>

      <div class="iconClose" :class="{ showIcon: cmpShowCloseIcon }">
        <img id="close" :src="imgClose" onload="SVGInject(this)" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "navbar-movil-comp",
  props: [],
  mounted() {},
  data() {
    return {
      menu_active: false,
      imgMenu: require("@/assets/icons/menu.svg"),
      imgClose: require("@/assets/icons/close-button.svg"),
    };
  },
  methods: {
    ...mapActions({
      mthMapToggleContact: "actToggleContact",
    }),
    mthToggleContact() {
      this.mthMapToggleContact({ status: true });
    },
    mthToogleMenu() {
      this.menu_active = !this.menu_active;
    },
  },
  computed: {
    cmpShowMenuIcon() {
      return this.menu_active === false;
    },
    cmpShowCloseIcon() {
      return this.menu_active === true;
    },
  },
};
</script>

<style scoped>
#navbarmovil {
  z-index: var(--navbar-index);
  grid-area: AppVue;

  display: var(--navbar-movil);
  gap: 10px;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: end;
  position: fixed;
  bottom: 20px;
  right: 20px;
  justify-self: end;
  align-self: end;
}

#navbarmovil span {
  display: grid;
  gap: 10px;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: end;
}

#navbarmovil a, #navbarmovil .divContact {
  text-decoration: none;
  padding: var(--navbar-a-pdd);
  font-weight: 600;
  font-size: 14px;
  text-align: center;

  background-color: #ffffff;
  color: #1e1e1e;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  cursor: pointer;
}

.navbar-items-enter-active {
  animation: fade-in 0.1s ease-out;
}

.navbar-items-leave-active {
  animation: fade-out 0.1s ease-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
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
  background-color: #ffffff;
  padding: 11px;
  border-radius: 10px;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  cursor: pointer;
}

.menu > div {
  justify-items: center;
  align-items: center;
}

.iconMenu,
.iconClose {
  display: none;
}

.showIcon {
  display: block;
}
</style>
