import { createStore } from 'vuex';
import states from './states';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const userModule = {
  state: states.user,
  getters: getters.user,
  mutations: mutations.user,
  actions: actions.user
};

const store = createStore({
  modules: { user: userModule }
});

export default store;
