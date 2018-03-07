import * as types from './actionTypes';

const ui = {
  startLoading: () => {
    return {type: types.START_LOADING};
  },
  stopLoading: () => {
    return {type: types.STOP_LOADING};
  },
};

export {ui};