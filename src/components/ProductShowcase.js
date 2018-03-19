import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  View,
  Text,
  Button,
  H1,
  H2,
  H3,
  Icon,
  Card,
  CardItem,
} from 'native-base';
import variables from '../../native-base-theme/variables/commonColor';

class ProductShowcase extends Component {
  render() {
    const {product, cancelAction} = this.props;
    return (
        <View style={styles.outerContainer}>
          <Button style={styles.closeButton} light icon onPress={() => cancelAction()}>
            <Icon name={'close'}/>
          </Button>
          <Card><CardItem>
          <View style={styles.column}>
            <Image source={{uri: product.image}}
                   style={styles.productImage}/>
          </View>
          <View style={styles.column}>
            <H1>{product.title}</H1>
            <H3 style={styles.productDescription}>{product.description}</H3>
          </View>
            <H2 style={styles.productPrice}>R$ {product.publicPrice}</H2>
          </CardItem></Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    paddingTop: 40,
  },
  column: {
    flex: 1,
    margin: 5,
  },
  productImage: {
    height: 300,
    width: null,
    flex: 1,
  },
  productPrice: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 5,
    left: 5,
    backgroundColor: variables.brandPrimary,
    color: 'white',
    padding: 10,
    fontSize: 42,
    lineHeight: 42,
  },
  productDescription: {
    marginTop: 15,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  }
});

export {ProductShowcase};