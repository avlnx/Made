import React, {Component} from 'react';
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
  Badge,
} from 'native-base';
import {connect} from 'react-redux';

class StoreProductListItem extends Component {
  getCurrentQuantityInCartForProduct(productId) {
    const {cart} = this.props;
    if (!cart[productId]) {
      return 0;
    }
    return cart[productId];
  }

  render() {
    const itemMargin = 15;
    const size = (Dimensions.get('window').width - (itemMargin * 4)) /
        this.props.numColumns;
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
    const item = this.props.item;
    return (
        <View style={styles.itemContainer}>
          <Card style={styles.item}>
            <CardItem cardBody>
              <Image source={{uri: item.image}}
                     style={{height: 250, width: null, flex: 1}}/>
              {this.getCurrentQuantityInCartForProduct(item.id) > 0 ?
              <Badge style={{position: 'absolute', top: 10, left: 10}}>
                <Text style={{fontSize: 24, lineHeight: 28}}>
                  {this.getCurrentQuantityInCartForProduct(item.id)}
                </Text>
              </Badge>:null}
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
              <Button disabled={!this.getCurrentQuantityInCartForProduct(item.id)} style={{marginRight: 10}}
                      onPress={() => this.props.updateAction(item, '-')}>
                <Icon name='remove'/>
              </Button>
              <Button onPress={() => this.props.updateAction(item, '+')}>
                <Icon name='add'/>
              </Button>
            </CardItem>
          </Card>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.stores.cart,
});
StoreProductListItem = connect(mapStateToProps)(StoreProductListItem);
export {StoreProductListItem};