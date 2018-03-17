import React, {Component} from 'react';
import {Dimensions, StyleSheet, Image} from 'react-native';
import {
  View,
  Card,
  CardItem,
  Body,
  H2,
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
        height: 440,
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
            </CardItem>
            <CardItem>
              <Body style={{flex: 2}}>
              <H2 style={{marginRight: 10}}>{item.title}</H2>
              </Body>
              <Right style={{flex: 1}}>
                <Text style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>R$ {item.publicPrice}</Text>
              </Right>
            </CardItem>
            <CardItem style={{justifyContent: 'flex-end'}}>
              <Button transparent style={{marginRight: 10}}>
                <Text style={{color: '#333'}}>Mais informações</Text>
              </Button>
              <Button disabled={!this.getCurrentQuantityInCartForProduct(item.id)} style={{marginRight: 10}}
                      onPress={() => this.props.updateAction(item, '-')}>
                <Icon name='remove'/>
              </Button>
              <Button onPress={() => this.props.updateAction(item, '+')}>
                <Icon name='add'/>
              </Button>
            </CardItem>
            {this.getCurrentQuantityInCartForProduct(item.id) > 0 ?
                <Badge style={{position: 'absolute', bottom: 10, left: 10, backgroundColor: '#333'}}>
                  <Text style={{fontSize: 24, lineHeight: 28, color: 'white'}}>
                    {this.getCurrentQuantityInCartForProduct(item.id)}
                  </Text>
                </Badge>:null}
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