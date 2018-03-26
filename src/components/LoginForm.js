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
      toggleLostPasswordModeAction,
      sendPasswordRecoveryEmailAction,
      lostPasswordMode,
      loginMessage,
    } = this.props;

    return (
        <View style={{flex: 1, justifyContent: 'center', paddingTop: 90}}>
          <H1>{loginMessage}</H1>
          <Form>
            <Item>
              <Label>Email</Label>
              <Input
                  value={currentEmail}
                  onChangeText={email => updateUserEmailInput(email)}
                  autoCorrect={false}
                  autoCapitalize={'none'}/>
            </Item>
            {lostPasswordMode ?
                <Text style={{marginVertical: 15}}>Preencha seu email e clique
                  em "Recuperar Senha". Nós
                  te enviaremos um email com instruções para restaurar seu
                  acesso.</Text> :
                <Item last style={{marginBottom: 15}}>
                  <Label>Senha</Label>
                  <Input
                      secureTextEntry
                      value={currentPassword}
                      onChangeText={password => updateUserPasswordInput(
                          password)}/>
                </Item>
            }
            <Button iconRight light
                    onPress={lostPasswordMode ?
                        sendPasswordRecoveryEmailAction :
                        loginUserAction}>
              <Text>{lostPasswordMode ? 'Recuperar Senha' : 'Confirmar'}</Text>
              <Icon name='arrow-forward'/>
            </Button>
            {toggleLostPasswordModeAction ?
                <Button transparent onPress={toggleLostPasswordModeAction}>
                  <Text>{lostPasswordMode ?
                      'Cancelar' :
                      'Esqueci minha senha :('}</Text>
                </Button>
                : null}
          </Form>
        </View>
    );

  }
}

export {LoginForm};
