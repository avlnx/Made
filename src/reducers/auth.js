import * as types from './actions/actionTypes';

const initialState = {
  triedToLogin: false,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case types.TRIED_TO_LOG_IN:
      return {
        ...state,
        triedToLogin: true,
      };
    default:
      return state;
  }
}
