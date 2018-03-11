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
} from 'native-base';

const StoreList = (props) => {
  const {items, actionActivate} = props;
  return (
      <View>
        <H1 style={{padding: 20, paddingBottom: 0}}>SUAS LOJAS</H1>
        <List dataArray={items}
              renderRow={(item) =>
                  <ListItem>
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
                            <Button onPress={() => actionActivate(item)}><Text>Começar a vender</Text></Button>}
                        </Body>
                      </CardItem>
                    </Card>
                  </ListItem>
              }>
        </List>
      </View>
  );
};

/*
<Card>
        <CardItem header>
          <Text>Suas Lojas</Text>
        </CardItem>
        <CardItem>
          <Body>
          <Text>
            Loja 1
          </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
          <Text>
            Loja 2
          </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
          <Text>
            Loja 3
          </Text>
          </Body>
        </CardItem>
      </Card>
 */
export {StoreList};