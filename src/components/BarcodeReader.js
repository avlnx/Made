import React, {Component} from 'react';
import {View,Text} from 'native-base';
import { RNCamera } from 'react-native-camera';
import {StyleSheet} from 'react-native';

class BarcodeReader extends Component {

  barCodeRead(e) {
    alert(e.data);
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>What's happening</Text>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              autoFocus={RNCamera.Constants.AutoFocus.on}
              onBarCodeRead={this.barCodeRead.bind(this)}
              style={styles.preview}
              type={RNCamera.Constants.Type.front}
              permissionDialogTitle={'Precisamos acessar a câmera'}
              permissionDialogMessage={'Libere acesso à câmera para ler códigos de barra'}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'aliceblue'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export {BarcodeReader};