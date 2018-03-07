import * as types from './actionTypes';
import firebase from 'react-native-firebase';
import actions from './';

const auth = {
  logOut: () => {
    // thunks win!
    return function (dispatch) {
      dispatch(actions.ui.startLoading());
      return firebase.auth().signOut().catch((e) => {
        alert(e);
      }).then(() => {
        dispatch(actions.ui.stopLoading());
      });
    }
  },
  triedToLogin: () => {
    return {type: types.TRIED_TO_LOG_IN}
  },
};

export {auth};