import React, {Component} from 'react';
import {View,Text} from 'native-base';
import { RNCamera } from 'react-native-camera';

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
  render() {
    return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>BARCODE</Text>
        </View>
    )
  }
}

export {BarcodeReader};