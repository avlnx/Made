import React from 'react';
import {Container, Content, H1, Button, Text} from 'native-base';

class OnboardingScreen extends React.Component {
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
          <Content padder>
            <H1>Onboarding Screen</H1>
            <Button
                onPress={() => this.props.navigation.navigate('LoggedOutStack')}
            >
              <Text>Sign Out</Text>
            </Button>
          </Content>
        </Container>
    );
  }
}

export {OnboardingScreen};