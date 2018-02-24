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
  View
} from 'native-base';

class LoginScreen extends React.Component {
  render() {
    return (
        <Container>
          <Header>
            <Left>
              <Button transparent
                      onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back'/>
              </Button>
            </Left>
            <Body>
            <Title>Login</Title>
            </Body>
            <Right/>
          </Header>
          <View style={{ flex: 1, padding: 10, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <H1 style={{ fontSize: 42, lineHeight: 42, textAlign: 'center'}}>Faça login para personalizar sua experiência</H1>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Button
                  block
                  iconLeft
                  onPress={() => this.props.navigation.navigate('LoggedInStack')}
                  style={{marginBottom: 15}}
              >
                <Icon name='mail'/>
                <Text>Email</Text>
              </Button>
              <Button
                  block
                  iconLeft
                  onPress={() => this.props.navigation.navigate('LoggedInStack')}
                  style={{marginBottom: 15}}
              >
                <Icon ios='facebook'/>
                <Text>Facebook</Text>
              </Button>
              <Button
                  block
                  iconLeft
                  onPress={() => this.props.navigation.navigate('LoggedInStack')}
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