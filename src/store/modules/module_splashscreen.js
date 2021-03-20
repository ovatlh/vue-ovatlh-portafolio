export default {
  state: {
    show_splash_screen: true,
  },
  mutations: {
    mutStatusSplashScreen(state, paramsStatus) {
      state.show_splash_screen = paramsStatus.status;
    },
  },
  actions: {
    actToggleSplashScreen(context, paramsStatus) {
      if (context.state.show_splash_screen) {
        context.commit("mutStatusSplashScreen", paramsStatus);
      }
    },
  },
  getters: {
    gettStatusSplashScreen(state) {
      return state.show_splash_screen;
    },
  },
};
