export const commonStore = {
  namespaced: true,
  state: () => ({
    // 헤더
    onSub: false,
    selectedGnb: null,
    hoveredGnb: null,
  }),
  getters: {},
  mutations: {
    toggleOnSub(state) {
      state.onSub = !state.onSub;
    },
    setHoveredGnb(state, payload) {
      state.hoveredGnb = payload;
    },
  },
  actions: {},
};
