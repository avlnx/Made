import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import actions from '../reducers/actions';
import {Container} from 'native-base';

const mapStateToProps = (state) => ({
  loading: state.ui.loading,
});

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
  }

  loginUser() {
    const {email, password} = this.state;
    const {dispatch} = this.props;
    dispatch(actions.ui.startLoading());
    dispatch(actions.auth.triedToLogin());
    firebase.auth().
        signInAndRetrieveDataWithEmailAndPassword(email, password).
        catch((e) => {
          alert(e);
          dispatch(actions.ui.stopLoading());
        }).
        then((user) => {
          dispatch(actions.ui.stopLoading());
        });
  }

  createUser() {
    const {email, password} = this.state;
    const {dispatch} = this.props;
    dispatch(actions.ui.startLoading());
    firebase.auth().
        createUserAndRetrieveDataWithEmailAndPassword(email, password).
        catch((e) => {
          alert(e);
          dispatch(actions.ui.stopLoading());
        }).
        then((user) => {
          dispatch(actions.ui.stopLoading());
        });
  }

  updateUserEmailInput(email) {
    this.setState({email});
  }

  updateUserPasswordInput(password) {
    this.setState({password});
  }

  render() {

    return (
        <Container>
          <LoginForm currentEmail={this.state.email}
                     currentPassword={this.state.password}
                     loginUserAction={this.loginUser.bind(this)}
                     createUserAction={this.createUser.bind(this)}
                     updateUserEmailInput={this.updateUserEmailInput.bind(this)}
                     updateUserPasswordInput={this.updateUserPasswordInput.bind(this)}/>
        </Container>
    );
  }
}

LoginScreen = connect(mapStateToProps)(LoginScreen);
export {LoginScreen};