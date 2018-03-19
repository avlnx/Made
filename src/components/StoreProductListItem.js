import React, {Component} from 'react';
import {Dimensions, StyleSheet, Image} from 'react-native';
import {
  View,
  Card,
  CardItem,
  Body,
  H2,
  Right,
  Text,
  Button,
  Icon,
  Badge,
} from 'native-base';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  itemContainer: {
    height: 440,
  },
  item: {
    flex: 1,
  },
});

class StoreProductListItem extends Component {

  render() {
    const {item, getCurrentQuantityIn, itemWidth, itemMargin} = this.props;
    return (
        <View style={[styles.itemContainer, {width: itemWidth, margin: itemMargin}]}>
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
              {getCurrentQuantityIn('inventory', item.id) ?
                  <View style={{flexDirection: 'row'}}>
                    <Button
                        disabled={!getCurrentQuantityIn('cart', item.id)}
                        style={{marginRight: 10}}
                        onPress={() => this.props.updateAction(item, '-')}>
                      <Icon name='remove'/>
                    </Button>
                    <Button
                        disabled={getCurrentQuantityIn('inventory', item.id) ===
                        getCurrentQuantityIn('cart', item.id)}
                        onPress={() => this.props.updateAction(item, '+')}>
                      <Icon name='add'/>
                    </Button>
                  </View>
                  :
                  <Text>Acabou :(</Text>}
            </CardItem>
            {getCurrentQuantityIn('cart', item.id) > 0 ?
                <Badge style={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  backgroundColor: '#333',
                }}>
                  <Text style={{fontSize: 24, lineHeight: 28, color: 'white'}}>
                    {getCurrentQuantityIn('cart', item.id)}
                  </Text>
                </Badge> : null}
          </Card>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({

});
StoreProductListItem = connect(mapStateToProps)(StoreProductListItem);
export {StoreProductListItem};