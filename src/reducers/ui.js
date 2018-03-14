import * as types from './actions/actionTypes';

const initialState = {
  loading: false,
  loadingMessage: null,
};

export default function ui(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_LOADING:
      return {
        ...state,
        loading: true,
        loadingMessage: action.payload
      };
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false,
        loadingMessage: null,
      };
    default:
      return state;
  }
}
