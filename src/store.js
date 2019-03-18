import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "this is new title",
    links: ['http://google.com', 'http://linkedin.co.uk', 'http://facebook.com']
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, index) => {
      state.links.splice(index, 1)
    },
    REMOVE_ALL: (state) => {
      state.links = []
    }
  },
  actions: {
    removeAll({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit(`REMOVE_ALL`);
          resolve();
        }, 1000)
      })

    }
  },
  getters: {
    getCount: function (state) {
      return state.links.length;
    }
  }
});
