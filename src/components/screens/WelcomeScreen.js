import React from 'react';
import {
  Container,
  Content,
  H1,
  H2,
  Button,
  Text,
  Icon,
  View,
} from 'native-base';
// import {bindActionCreators} from 'redux';
// import * as authActions from '../../actions/authActions';
// import {connect} from 'react-redux';
// import {getResetAndNavigateActionTo} from '../../navigators';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  // resetAndNavigate(routeName) {
  //   const action = getResetAndNavigateActionTo(routeName);
  //   this.props.navigation.dispatch(action);
  // }

  // // Before doing anything, are we logged in already? This is where
  // // we decide if we should redirect the user or let him login
  // componentWillMount() {
  //   const {isLoggedIn} = this.props;
  //   if (isLoggedIn) {
  //     // User is already logged in, reset to LoggedInStack
  //     this.resetAndNavigate('LoggedInStack');
  //   }
  // }

  render() {
    return (
        <Container>
          <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', fontSize: 92}}>HERMES</Text>
              <Text style={{textAlign: 'center', fontSize: 36}}>A primeira
                solução completa de self-checkout orgulhosamente
                brasileira.</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Button block iconRight
                      onPress={() => this.props.navigation.navigate('Login')}
              >
                <Text>Vamos Começar</Text>
                <Icon name='arrow-forward'/>
              </Button>
            </View>
          </View>
        </Container>
    );
  }
}

// SplashScreen = connect(state => ({
//       isLoggedIn: state.auth.isLoggedIn
//     }),
//     (dispatch) => ({
//       actions: bindActionCreators(authActions, dispatch)
//     })
// )(SplashScreen);
//

export {WelcomeScreen};