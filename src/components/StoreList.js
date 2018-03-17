import React from 'react';
import {
  Text,
  List,
  ListItem,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Button,
  H1,
  H2,
  View,
  Icon,
} from 'native-base';

const StoreList = (props) => {
  const {items, actionActivate, storeConfigAction} = props;
  return (
      <View>
        <H1 style={{padding: 20, paddingBottom: 0}}>SUAS LOJAS</H1>
        <List dataArray={items}
              renderRow={(item) =>
                  <ListItem noBorder>
                    <Card>
                      <CardItem>
                        <Body>
                        <H2>{item.nickname}</H2>
                        </Body>
                      </CardItem>
                      <CardItem>
                        <Body>
                        {item.isActive ?
                            <Text note>A loja já está ativa em outro
                              aparelho.</Text> :
                            <View style={{
                              alignSelf: 'stretch',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignContent: 'flex-end',
                            }}>
                              <Button small light onPress={() => storeConfigAction(item)}>
                                <Icon name={'cog'}/>
                              </Button>
                              <Button
                                  onPress={() => actionActivate(item)}><Text>Começar
                                a vender</Text></Button>
                            </View>}
                        </Body>
                      </CardItem>
                    </Card>
                  </ListItem>
              }>
        </List>
      </View>
  );
};

export {StoreList};