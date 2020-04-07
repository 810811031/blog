import Vue from 'vue';
import Vuex from 'vuex';
import { State } from './store.type'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Vue搭建博客',
    showTitle: false
  },
  mutations: {
    changeTitleStatus(state: State, params: boolean) {
      state.showTitle = params
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getTitle: (state: State) => state.title,
    getTitleStatus: (state: State) => state.showTitle
  }
});
