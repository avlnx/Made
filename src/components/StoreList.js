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
  const {items} = props;
  return (
      <View>
        <List dataArray={items}
              renderRow={(item) =>
                  <ListItem>
                    <Body>
                    <Text note>{item.id}</Text>
                    <H2>{item.nickname}</H2>
                    </Body>
                    <Right>
                      {item.isActive ?
                          <Text note>A loja já está ativa em outro
                            aparelho.</Text> :
                          <Button><Text>Começar a vender</Text></Button>}
                    </Right>
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