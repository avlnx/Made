import React from 'react';
import {Content,H1,H2,View,Button,Text,Icon, Card, CardItem,Form,Item,Label,Input} from 'native-base';
import {ProductQuantityList} from '.';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
  },
});

const StoreConfigForm = (props) => {
  const {updateQuantityForProduct, nickname, data, saveAction, cancelAction, updateNickname} = props;
  return (
      <Content padder>
        <H1 style={styles.title}>Editando {nickname}</H1>
        <Card>
          <CardItem>
            <Form>
              <Item>
                <Label>Apelido da sua loja</Label>
                <Input
                    value={nickname}
                    onChangeText={nickname => updateNickname(
                        nickname)}
                    autoCorrect={false}/>
              </Item>
              <Text note>Esse valor é apenas para seu controle. Seus
                clientes não verão o apelido da sua loja.</Text>
            </Form>
          </CardItem>
        </Card>
        <H2 style={styles.title}>Estoque da sua loja</H2>
        <ProductQuantityList data={data}
                             updateQuantityForProduct={updateQuantityForProduct}/>
        <View style={{
          justifyContent: 'center',
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
          <Button light onPress={() => saveAction()}>
            <Text>Salvar</Text>
          </Button>
          <Button iconLeft transparent
                  onPress={() => cancelAction()}>
            <Icon name={'arrow-back'}/>
            <Text>Cancelar</Text>
          </Button>
        </View>
      </Content>
  );
};

export {StoreConfigForm};