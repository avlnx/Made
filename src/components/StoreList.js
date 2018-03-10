import React from 'react';
import {Text, Card, CardItem, Body, List, ListItem} from 'native-base';

const StoreList = (props) => {
  const {
    items,
  } = props;
  console.log('Items in StoreList: ', items.join(', '));
  return (
      <List dataArray={items}
            renderRow={(item) =>
                <ListItem>
                  <Text>{item.nickname}</Text>
                </ListItem>
            }>
      </List>
  )
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