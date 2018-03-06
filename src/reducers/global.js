import * as types from '../actions/actionTypes';

const initialState = {
  loading: false
};

export default function global(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
