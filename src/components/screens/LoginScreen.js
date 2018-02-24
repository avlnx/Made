import React from 'react';
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

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  resetAndNavigate(routeName) {
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

export {LoginScreen};