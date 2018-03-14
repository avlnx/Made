import firebase from 'react-native-firebase';
import actions from './';

const auth = {
  logOut: (payload) => {
    // payload = navigation
    return function(dispatch) {
      dispatch(actions.ui.startLoading('Até logo :)'));
      payload.navigate('Loading');
      return firebase.auth().signOut().catch((e) => {
        alert(e);
        payload.goBack(null);
      }).then(() => {
        dispatch(actions.ui.stopLoading());
        payload.navigate('Auth');
      });
    };
  },
  sendRecoveryPassword: (payload) => {
    return function(dispatch) {
      dispatch(actions.ui.startLoading());
      return firebase.auth().sendPasswordResetEmail(payload).then(function() {
        // Email sent.
        alert('Enviamos intruções para restaurar seu acesso para seu email ' + payload);
      }).catch(function(error) {
        // An error happened.
        alert(error);
      }).finally(() => {
        dispatch(actions.ui.stopLoading());
      });
    };
  },
};

export {auth};