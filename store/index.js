export const state = () => ({
  events: [],
  currentPage: 0,
  totalPages: 0
});

export const mutations = {
  updateEvents: (state, payload) => {
    state.events = payload;
  },
  updateCurrentPage: (state, payload) => {
    state.currentPage = payload;
  },
  getTotalPages: (state, payload) => {
    state.totalPages = payload;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const res = await this.$axios.get("/events?limit=9");
      const data = res.data.data;
      const { events, pageInfo } = data;
      commit("updateEvents", events);
      commit("updateCurrentPage", pageInfo.currentPage);
      commit("getTotalPages", pageInfo.totalPages);
    } catch (error) {
      commit("updateEvents", []);
    }
  }
};
