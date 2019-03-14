import { make } from "vuex-pathify";

const state = {
  refreshData: {
    autoRefresh: false,
    refreshTimer: 15000
  },
  visual: {
    colorScheme: "default",
    fontFamily: "Roboto Condensed",
    fontSize: 16,
    FontColorPrimary: "#000000",
    FontColorSecondary: "#212121",
    FontColorAccent1: "#BA68C8",
    FontColorAccent2: "#8D6E63",
    FontColorAccent3: "#F48FB1",
    FontColorInformation: "#90CAF9",
    FontColorSuccess: "#66BB6A",
    FontColorWarning: "#FFF59D",
    FontColorError: "#EF9A9A"
  },
  random: ""
};

// import rootState from "@/store/store";

const getters = {
  ...make.getters(state) // vuex-pathify
};

const mutations = {
  ...make.mutations(state) // vuex-pathify
};

const actions = {
  ...make.actions(state) // vuex-pathify
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
