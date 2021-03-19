export default {
  state: {
    list_proyectos: [
      {
        img: require("@/assets/proyectos/myanimesearcher/imgs/mal-favicon.png"),
        nombre: "MyAnimeSearcher",
        title: "MyAnimeSearcher: Buscador de MyAnimeList",
        link: { path: "/proyectos/myanimesearcher" },
      },
      {
        img: require("@/assets/proyectos/fcasabinas/imgs/fcasabinas_icon.png"),
        nombre: "FCA Sabinas",
        title: "Festival de la Carne Asada 2020 - Sabinas, Coahuila",
        link: { path: "/proyectos/fcasabinas" },
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    gettListProyectos(state) {
      return state.list_proyectos;
    },
  },
};
