import React from 'react';
import {
  Container,
  Content,
  H1,
  H2,
  Button,
  Text,
  Footer,
  Icon,
  View,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {getResetAndNavigateActionTo} from '../navigators/index';

class NewPOSScreen extends React.Component {
  static navigationOptions = {
    title: 'Adicionar novo POS',
  };

  render() {
    return (
        <Container>
          <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <H2 style={{fontSize: 42, lineHeight: 42}}>Preencha os dados para
                adicionar um novo POS à sua conta</H2>
            </View>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <Form>
                <Item floatingLabel>
                  <Label>Nome do Ponto</Label>
                  <Input/>
                </Item>
                <Text style={{marginLeft: 15}}>O título do seu ponto de vendas. Seus clientes verão este nome.</Text>
                <Item floatingLabel last>
                  <Label>Apelido Interno</Label>
                  <Input/>
                </Item>
                <Text style={{marginLeft: 15}}>Para você saber diferenciar este ponto dos outros. Seus
                  clientes não verão este valor.</Text>
              </Form>
              <Button
                  block
                  iconRight
                  onPress={() => this.props.navigation.navigate(
                      'AddProductsToPOS')}
                  style={{marginTop: 10}}
              >
                <Text>Adicionar Novo Ponto</Text>
                <Icon name='add'/>
              </Button>
            </View>
          </View>
        </Container>
    );
  }
}

export {NewPOSScreen};