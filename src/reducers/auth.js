import * as types from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case types.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}
