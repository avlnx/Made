import React from 'react';
import {Card, CardItem, View, Badge, Text, Button, Icon} from 'native-base';
import {FlatList, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  badgeStyle: {
    marginRight: 10,
    backgroundColor: '#333',
  },
  badgeTextStyle: {
    color: 'white',
    fontSize: 18,
  },
  listDataStyle: {
    flex: 4,
    flexDirection: 'row',
  },
  listActionsStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  removeButtonStyle: {
    marginRight: 10,
  },
});

const ProductQuantityList = (props) => {
  const {data, updateQuantityForProduct} = props;
  return (
      <Card>
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
                <CardItem>
                  <View style={styles.listDataStyle}>
                    <Badge primary
                           style={styles.badgeStyle}><Text
                        style={styles.badgeTextStyle}>{item.quantity}</Text></Badge>
                    <Text>{item.title}</Text>
                  </View>
                  <View style={styles.listActionsStyle}>
                    <Button icon small style={styles.removeButtonStyle}
                            disabled={item.quantity === 0}
                            onPress={() => updateQuantityForProduct(
                                item, '-')}>
                      <Icon name={'remove'}/>
                    </Button>
                    <Button icon small
                            onPress={() => updateQuantityForProduct(
                                item, '+')}>
                      <Icon name={'add'}/>
                    </Button>
                  </View>
                </CardItem>
            }>
        </FlatList>
      </Card>
  );
};

export {ProductQuantityList};