import * as types from './actionTypes';

// export function startLoading() {
//   return {
//     type: types.START_LOADING
//   };
// }
//
// export function stopLoading() {
//   return {
//     type: types.STOP_LOADING
//   };
// }

export default globalActions = {
  startLoading: () => {
    return {type: types.START_LOADING};
  },
  stopLoading: () => {
    return {type: types.STOP_LOADING};
  },
};