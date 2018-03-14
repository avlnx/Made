import * as types from './actionTypes';

const ui = {
  startLoading: (payload) => {
    return {type: types.START_LOADING, payload};
  },
  stopLoading: () => {
    return {type: types.STOP_LOADING};
  },
};

export {ui};