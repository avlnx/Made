import React from 'react';
import {bindActionCreators} from 'redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Content,
  H1,
  Text,
  View,
} from 'native-base';
import {getResetAndNavigateActionTo} from '../../navigators/';
import * as authActions from '../../actions/authActions';
import {connect} from 'react-redux';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  debugLogUserIn() {
    // TODO replace with actual firebase stuff later, this is here for testing
    this.props.actions.logIn();
  }

  resetAndNavigate(routeName) {
    // TODO temp test hack, actually log in with firebase
    this.debugLogUserIn();
    const action = getResetAndNavigateActionTo(routeName);
    this.props.navigation.dispatch(action);
  }

  render() {
    return (
        <Container>
          <View style={{flex: 1, padding: 10, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <H1 style={{fontSize: 42, lineHeight: 42}}>Faça
                login para personalizar sua experiência</H1>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Button
                  block
                  iconLeft
                  onPress={() => this.resetAndNavigate('LoggedInStack')}
                  style={{marginBottom: 15}}
              >
                <Icon name='mail'/>
                <Text>Email</Text>
              </Button>
              <Button
                  block
                  iconLeft
                  onPress={() => this.resetAndNavigate('LoggedInStack')}
                  style={{marginBottom: 15}}
              >
                <Icon ios='facebook'/>
                <Text>Facebook</Text>
              </Button>
              <Button
                  block
                  iconLeft
                  onPress={() => this.resetAndNavigate('LoggedInStack')}
              >
                <Icon ios='google'/>
                <Text>Google</Text>
              </Button>
            </View>
          </View>
        </Container>
    );
  }
}

// export {LoginScreen};

LoginScreen = connect(state => ({
      isLoggedIn: state.auth.isLoggedIn
    }),
    (dispatch) => ({
      actions: bindActionCreators(authActions, dispatch)
    })
)(LoginScreen);

export {LoginScreen};