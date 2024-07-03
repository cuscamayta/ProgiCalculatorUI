const state = {
  show: false,
  message: "",
  color: "success",
  timeout: 3000,
};

const mutations = {
  setSnackbar(state, payload) {
    state.show = true;
    state.message = payload.message;
    state.color = payload.color || "success";
    state.timeout = payload.timeout || 3000;
  },
  hideSnackbar(state) {
    state.show = false;
  },
};

const actions = {
  showSnackbar({ commit }, payload) {
    commit("setSnackbar", payload);
    setTimeout(() => {
      commit("hideSnackbar");
    }, state.timeout);
  },
};

const getters = {
  snackbar(state) {
    return state;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
