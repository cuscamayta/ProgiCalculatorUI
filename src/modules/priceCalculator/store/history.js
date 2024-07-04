const state = {
  quotes: [],
};

const mutations = {
  addQuote(state, payload) {
    state.quotes.push(payload);
  },
};

const actions = {
  saveQuote({ commit }, payload) {
    commit("addQuote", payload);
  },
};

const getters = {
  quoteHistory(state) {
    return state.quotes;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
