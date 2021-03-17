export default {
  state: {
    list_proyectos: [
      {
        img: require("@/assets/imgs/profile_picture_01.jpg"),
        nombre: "MyAnimeSearcher",
        title: "MyAnimeSearcher: Buscador de MyAnimeList",
        link: { path: "/proyectos/myanimesearcher" },
      },
      {
        img: require("@/assets/imgs/profile_picture_01.jpg"),
        nombre: "FCA Sabinas",
        title: "Sabinas, Coahuila: Festival de la Carne Asada 2020",
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
