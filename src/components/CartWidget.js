import React, {Component} from 'react';
import {Text, View, Icon, Button, H1, Badge} from 'native-base';
import {connect} from 'react-redux';

class CartWidget extends Component {
  render() {
    return (
        <View style={{
          height: 100,
          padding: 15,
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignItems: 'center',
          borderTopWidth: 0.5,
          borderTopColor: '#333',
        }}>
          <View style={{flex: 1}}>
            <Icon name={'cart'} style={{fontSize: 42}}/>
            <Badge primary>
              <Text style={{fontSize: 24, lineHeight: 28}}>2</Text>
            </Badge>
          </View>
          <View style={{flex: 4}}>
            <H1 style={{fontWeight: 'bold', fontSize: 36, lineHeight: 36}}>R$ 79,00</H1>
          </View>
          <View style={{flex: 8}}>
            <Button iconRight block primary>
              <Text>Checkout</Text>
              <Icon name={'arrow-dropright-circle'}/>
            </Button>
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({});

CartWidget = connect(mapStateToProps)(CartWidget);

export {CartWidget};