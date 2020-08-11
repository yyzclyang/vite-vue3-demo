import {
  CHANGE_LOGIN_STATUS,
  CHANGE_NAME,
  CHANGE_AGE,
  CHANGE_STAR
} from './mutation-types';

export default {
  [CHANGE_LOGIN_STATUS]: (state, payload) => {
    state.login = payload.loginStatus;
  },
  [CHANGE_NAME]: (state, payload) => {
    state.userInfo = {
      ...state.userInfo,
      name: payload.name
    };
  },
  [CHANGE_AGE]: (state, payload) => {
    state.userInfo = {
      ...state.userInfo,
      age: payload.age
    };
  },
  [CHANGE_STAR]: (state, payload) => {
    state.userInfo = {
      ...state.userInfo,
      star: payload.star
    };
  }
};
