import * as types from '../actions/actionTypes';
// TODO: setup thunk and get rid of these two lines
import firebase from 'react-native-firebase';
import {actions} from '../actions/actions';

const initialState = {
  isLoggedIn: false,
  triedToLogin: false,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case types.LOG_OUT:
      // TODO: setup a thunk for this
      // firebase.auth().signOut();
      // .catch((e) => {
      //   alert(e);
      // })
      // .then(() => {
      //   dispatch(actions.stopLoading());
      // });
      return {
        ...state,
        isLoggedIn: false
      };
    case types.TRIED_TO_LOG_IN:
      return {
        ...state,
        triedToLogin: true
      };
    default:
      return state;
  }
}
