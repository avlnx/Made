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
  View
} from 'native-base';

class LoginForm extends Component {

  render() {

    const {
      loginUserAction,
      createUserAction,
      updateUserEmailInput,
      updateUserPasswordInput,
      currentEmail,
      currentPassword,
    } = this.props;

    return (
        <View style={{flex: 1, padding: 10, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <H1 style={{fontSize: 42, lineHeight: 42}}>Faça
              login ou crie uma conta para personalizar sua experiência</H1>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
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
                    onChangeText={password => updateUserPasswordInput(password)}
                    />
              </Item>
              <Button iconRight primary
                      onPress={loginUserAction}
              >
                <Text>Entrar</Text>
                <Icon name='arrow-forward'/>
              </Button>
              <Button transparent
                      onPress={createUserAction}
              >
                <Text>Criar nova conta</Text>
              </Button>
            </Form>

          </View>
        </View>
    );

  }
}

export default LoginForm;
