import React from 'react';
import {Image} from 'react-native';
import {View} from 'native-base';

const MadeLogo = () => {
  return (
      <View style={{alignSelf: 'center', padding: 20}}>
        <Image source={{uri: 'https://cdn.shopify.com/s/files/1/1745/6969/t/4/assets/logo.png?6633214415901163053'}}
               style={{height: 66, width: 210}}/>
      </View>
  );
};

export {MadeLogo};