export const commonStore = {
  namespaced: true,
  state: () => ({
    // 헤더
    hoveredGnb: null,
  }),
  getters: {},
  mutations: {
    setHoveredGnb(state, payload) {
      state.hoveredGnb = payload;
    },
  },
  actions: {},
};
