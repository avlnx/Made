import React, {Component} from 'react';
import {View,Text,Button} from 'native-base';

class ProductShowcase extends Component {
  render() {
    const {product, cancelAction} = this.props;
    return (
        <View>
          <Text>{product.title}</Text>
          <Button onPress={() => cancelAction()}>
            <Text>Fechar</Text>
          </Button>
        </View>
    );
  }
}

export {ProductShowcase};