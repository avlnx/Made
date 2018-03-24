import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View,Text,Badge,H2,H3} from 'native-base';

class CartDetailsItem extends Component {
  render() {
    const {item} = this.props;
    if (item.quantityInCart === 0) return null;
    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Badge primary style={styles.badgeStyle}>
              <Text style={{color: 'black'}}>{item.quantityInCart}</Text>
            </Badge>
            <H3>{item.title}</H3>
          </View>
          <View style={styles.priceContainer}>
            <H3 style={styles.priceStyle}>R$ {item.publicPrice}</H3>
            <Text note>/un</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopColor: '#bbb',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  badgeStyle: {
    marginRight: 15,
  },
  priceStyle: {
    alignSelf: 'flex-end',
  },
  titleContainer: {
    flex: 3,
    flexDirection: 'row'
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export {CartDetailsItem};