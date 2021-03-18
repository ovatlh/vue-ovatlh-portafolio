<template>
  <div class="divMyAnimeSearcherView">
    <div class="top">
      <img class="logo" :src="svgLogo" onload="SVGInject(this)">
    </div>
    <img class="icon" :src="pngIcon" alt="Icon: MyAnimeSearcher">

    <div class="content">
      <p><strong>MyAnimeSearcher</strong> es una aplicación web creada con <strong>Vue.js</strong> donde puedes buscar Animes, Mangas, Personajes o Personas en la industria del Anime.</p>
      <p>Toda la información es obtenida mediante la API de <strong>Jikan</strong>, la cual obtiene la información de la página <strong>MyAnimeList</strong>.</p>

      <br>

      <div class="descripcion">
        <h3>¿Qué se utilizó para crearla?</h3>
        <p>> Vuejs</p>
        <pre> - Vue-router</pre>
        <pre> - Vuex</pre>
        <pre> - Vue-Axios</pre>
        <pre> - iconfu/svg-inject</pre>
        <p>> Jikan API</p>
        <p>> Icons: Material Design</p>
        <p>> Visual Studio Code</p>
      </div>

      <br>

      <div class="links">
        <h3>Links</h3>
        <a href="https://ovatlh.github.io/apps/mal/" target="_blank"><strong>> Web: MyAnimeSearcher</strong></a>
        <a href="https://github.com/ovatlh/vue-mal-search" target="_blank"><small>> GitHub: MyAnimeSearcher</small></a>
        <a href="https://myanimelist.net/" target="_blank"><small>> Web: MyAnimeList</small></a>
        <a href="https://jikan.moe/" target="_blank"><small>> Web: Jikan</small></a>
        <a href="https://vuejs.org/" target="_blank"><small>> Web: Vue.js</small></a>

        <a href="https://router.vuejs.org/" target="_blank"><small>> Web: Vue Router</small></a>
        <a href="https://vuex.vuejs.org/" target="_blank"><small>> Web: Vuex</small></a>
        <a href="https://github.com/imcvampire/vue-axios" target="_blank"><small>> GitHub: Vue-Axios</small></a>
        <a href="https://github.com/iconfu/svg-inject" target="_blank"><small>> GitHub: SVGInject</small></a>
        <a href="https://material.io/resources/icons/" target="_blank"><small>> Web: Icons: Material Design</small></a>
        <a href="https://code.visualstudio.com/" target="_blank"><small>> Web: Visual Studio Code</small></a>
      </div>

      <img class="cover" src="https://raw.githubusercontent.com/ovatlh/vue-mal-search/main/src/assets/imgs/cover.jpg" alt="IMG: MyAnimeSearcher" title="IMG: MyAnimeSearcher">
    </div>
  </div>
</template>

<script>
export default {
  name: "my-anime-searcher-view",
  props: [],
  mounted() {},
  data() {
    return {
      svgLogo: require("@/assets/proyectos/myanimesearcher/imgs/malsearcher-icon-large.svg"),
      pngIcon: require("@/assets/proyectos/myanimesearcher/imgs/mal-favicon.png"),
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divMyAnimeSearcherView {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-content: start;

  min-height: 100vh;
  background-color: #2f52a2;
}

.divMyAnimeSearcherView h3 {
  padding-bottom: 5px;
  border-bottom: 1px solid #1e1e1e;
}

.top {
  display: grid;
  justify-items: center;
  align-items: center;

  min-height: 250px;
  max-height: 250px;
}

.logo {
  min-width: 100%;
  max-width: 100%;
  height: 100%;

  fill: #ffffff;
}

.icon {
  width: 100px;
  height: 100px;
  position: absolute;
  left: var(--mal-icon-left);
  top: 200px;
  
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
}

.content {
  display: grid;
  padding: 20px;
  padding-top: 80px;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  align-content: start;

  background-color: #f5f5f5;
  color: #1e1e1e;
}

.links {
  display: grid;
  gap: 2px;
  grid-auto-flow: row;
}

.links a {
  text-decoration: none;
  font-weight: 600;
  color: #1e1e1e;
  padding: 5px;
}

.links a:hover {
  background-color: rgba(47, 82, 162, 1);
  color: #ffffff;
}

.cover {
  min-width: 100%;
  max-width: 100%;
  height: 300px;
  margin-top: 50px;
  object-fit: contain;
  justify-self: center;
  
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
}
</style>
