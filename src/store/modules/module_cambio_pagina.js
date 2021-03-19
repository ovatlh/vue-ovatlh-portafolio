export default {
  state: {
    show_cambio_pagina: false,
    center_cambio_pagina: false,
  },
  mutations: {
    mutStatusCambioPagina(state, paramsStatus) {
      state.show_cambio_pagina = paramsStatus.status;
    },
    mutCenterStatusCambioPagina(state, paramsStatus) {
      state.show_cambio_pagina = paramsStatus.status;
    },
  },
  actions: {
    actToggleCambioPagina(context, paramsStatus) {
      // console.log("before: ", context.state.show_cambio_pagina);
      context.commit("mutStatusCambioPagina", paramsStatus);
      // console.log("after: ", context.state.show_cambio_pagina);
    },
    actToggleCenterCambioPagina(context, paramsStatus) {
      // console.log("before: ", context.state.show_cambio_pagina);
      context.commit("mutCenterStatusCambioPagina", paramsStatus);
      // console.log("after: ", context.state.show_cambio_pagina);
    },
  },
  getters: {
    gettShowCambioPagina(state) {
      return state.show_cambio_pagina;
    },
    gettCenterCambioPagina(state) {
      return state.center_cambio_pagina;
    },
  },
};
