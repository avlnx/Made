import React, {Component} from 'react';
import {
  Label,
  Button,
  Input,
  H1,
  H3,
  Text,
  Form,
  Item,
  Icon,
  View,
} from 'native-base';

class LoginForm extends Component {

  render() {

    const {
      loginUserAction,
      updateUserEmailInput,
      updateUserPasswordInput,
      currentEmail,
      currentPassword,
    } = this.props;

    return (
        <View style={{flex: 1, justifyContent: 'center', paddingTop: 90}}>
          <H1 style={{fontSize: 24, lineHeight: 24}}>Faça
            login para personalizar sua experiência</H1>
          <Form>
            <Item>
              <Label>Email</Label>
              <Input
                  value={currentEmail}
                  onChangeText={email => updateUserEmailInput(email)}
                  autoCorrect={false}
                  autoCapitalize={'none'}/>
            </Item>
            <Item last style={{marginBottom: 15}}>
              <Label>Senha</Label>
              <Input
                  secureTextEntry
                  value={currentPassword}
                  onChangeText={password => updateUserPasswordInput(password)}/>
            </Item>
            <Button iconRight primary
                    onPress={loginUserAction}>
              <Text>Entrar</Text>
              <Icon name='arrow-forward'/>
            </Button>
          </Form>
        </View>
    );

  }
}

export {LoginForm};
