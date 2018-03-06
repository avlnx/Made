import * as types from './actionTypes';

export const actions = {
  // auth
  logIn: () => {
    return {type: types.LOG_IN};
  },
  logOut: () => {
    return {type: types.LOG_OUT};
  },
  triedToLogin: () => {
    return {type: types.TRIED_TO_LOG_IN};
  },
  // global
  startLoading: () => {
    return {type: types.START_LOADING};
  },
  stopLoading: () => {
    return {type: types.STOP_LOADING};
  },
};