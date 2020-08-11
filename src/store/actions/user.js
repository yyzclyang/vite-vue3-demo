import {
  CHANGE_LOGIN_STATUS,
  CHANGE_NAME as MUTATION_CHANGE_NAME,
  CHANGE_AGE,
  CHANGE_STAR
} from '../mutations/mutation-types';
import { LOGIN, LOGOUT, CHANGE_NAME, GROW_UP, STAR } from './action-types';

export default {
  [LOGIN]: ({ commit }) => {
    const getUserInfo = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ name: 'yyzcl', age: 18, star: 88 });
        }, 500);
      });
    };
    getUserInfo().then((userInfo) => {
      commit({ type: CHANGE_LOGIN_STATUS, loginStatus: true });
      commit({ type: MUTATION_CHANGE_NAME, name: userInfo.name });
      commit({ type: CHANGE_AGE, age: userInfo.age });
      commit({ type: CHANGE_STAR, star: userInfo.star });
    });
  },
  [LOGOUT]: ({ commit }) => {
    commit({ type: CHANGE_LOGIN_STATUS, loginStatus: false });
  },
  [CHANGE_NAME]: ({ commit }, payload) => {
    commit({ type: MUTATION_CHANGE_NAME, name: payload.name });
  },
  [GROW_UP]: ({ commit, state }) => {
    commit({ type: CHANGE_AGE, age: state.age + 1 });
  },
  [STAR]: ({ commit, state }) => {
    commit({ type: CHANGE_STAR, star: state.star + 1 });
  }
};
