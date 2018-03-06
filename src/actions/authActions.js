import * as types from './actionTypes';
import firebase from 'react-native-firebase';
import {actions} from './actions';

// export function logIn() {
//   return {
//     type: types.LOG_IN
//   };
// }
//
// export function logOut() {
//   return {
//     type: types.LOG_OUT
//   };
// }
/*
function makeASandwichWithSecretSauce(forPerson) {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}
 */

const auth = {
  logIn: () => {
    return {type: types.LOG_IN};
  },
  logOut: () => {
    // return {type: types.LOG_OUT};
    // thunks win!
    return function (dispatch) {
      dispatch(actions.startLoading());
      return firebase.auth().signOut().catch((e) => {
        alert(e);
      }).then(() => {
        dispatch(actions.stopLoading());
        dispatch(actions.logOut());
      });
    }
  },
  triedToLogin: () => {
    return {type: types.TRIED_TO_LOG_IN}
  },
};

export {auth};