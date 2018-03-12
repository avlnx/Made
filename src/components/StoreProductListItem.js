import React from 'react';
import {Dimensions, StyleSheet, Image} from 'react-native';
import {
  View,
  Card,
  CardItem,
  Body,
  H3,
  Right,
  Text,
  Button,
  Icon,
} from 'native-base';

const StoreProductListItem = (props) => {
  const itemMargin = 15;
  const size = (Dimensions.get('window').width - (itemMargin * 4)) /
      props.numColumns;
  const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: 400,
      margin: itemMargin,
    },
    item: {
      flex: 1,
    },
  });
  const item = props.item;
  return (
      <View style={styles.itemContainer}>
        <Card style={styles.item}>
          <CardItem cardBody>
            <Image source={{uri: item.image}}
                   style={{height: 250, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Body style={{flex: 2}}>
            <H3>{item.title}</H3>
            </Body>
            <Right style={{flex: 1}}>
              <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
              }}>R$ {item.publicPrice}</Text>
            </Right>
          </CardItem>
          <CardItem style={{justifyContent: 'flex-end'}}>
            <Button transparent small>
              <Text>Mais informações</Text>
            </Button>
            <Button style={{marginRight: 10}}>
              <Icon name='remove'/>
            </Button>
            <Button>
              <Icon name='add'/>
            </Button>
          </CardItem>
        </Card>
      </View>
  );
};

export {StoreProductListItem};