export default {
  state: {
    show_contact: false,
  },
  mutations: {
    mutStatusContact(state, paramsStatus) {
      state.show_contact = paramsStatus.status;
    },
  },
  actions: {
    actToggleContact(context, paramsStatus) {
      context.commit("mutStatusContact", paramsStatus);
    },
  },
  getters: {
    gettStatusContact(state) {
      return state.show_contact;
    },
  },
};
