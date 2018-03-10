import React from 'react';
import {View, Form, Item, Label, Input, Text, Button, Icon} from 'native-base';

const LoadPosForm = (props) => {
  const {
    currentNickname,
    updateNicknameInput,
    addPOSAction,
  } = props;
  return (
      <View>
        <Form>
          <Item floatingLabel last>
            <Label>Apelido Interno</Label>
            <Input
                value={currentNickname}
                onChangeText={nickname => updateNicknameInput(nickname)}/>
          </Item>
          <Text style={{marginLeft: 15}}>Para você saber diferenciar este
            ponto dos outros. Seus
            clientes não verão este valor.</Text>
        </Form>
        <Button
            block
            iconRight
            onPress={() => addPOSAction()}
            style={{marginTop: 10}}
        >
          <Text>Adicionar Novo Ponto</Text>
          <Icon name='add'/>
        </Button>
      </View>
  );
};

export {LoadPosForm};