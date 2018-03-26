import React, {Component} from 'react';
import {View,Text} from 'native-base';
import { RNCamera } from 'react-native-camera';
import {StyleSheet} from 'react-native';

/*
<RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              type={RNCamera.Constants.Type.front}
              flashMode={RNCamera.Constants.FlashMode.off}
              permissionDialogTitle={'Precisamos acessar a câmera'}
              permissionDialogMessage={'Libere acesso à câmera para ler códigos de barra'}
          />
 */
class BarcodeReader extends Component {
  cameraReady() {
    alert('Camera is ready dude.');
  }
  render() {
    return (
        <View style={styles.container}>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              onCameraReady={() => this.cameraReady()}
              style={styles.preview}
              type={RNCamera.Constants.Type.front}
              flashMode={RNCamera.Constants.FlashMode.off}
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