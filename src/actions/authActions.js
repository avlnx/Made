import * as types from './actionTypes';

export function logIn() {
  return {
    type: types.LOG_IN
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT
  };
}