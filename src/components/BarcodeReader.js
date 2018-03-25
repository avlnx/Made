import React, {Component} from 'react';
import {View,Text} from 'native-base';

class BarcodeReader extends Component {
  render() {
    return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}><Text>BARCODE</Text></View>
    )
  }
}

export {BarcodeReader};