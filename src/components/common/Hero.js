import React from 'react';
import {
  Text,
  View,
} from 'native-base';

const Hero = () => {
  return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 102}}>MADE</Text>
        <Text style={{textAlign: 'center', fontSize: 18}}>A primeira
          solução completa de self-checkout orgulhosamente
          brasileira.</Text>
      </View>
  );
};

export {Hero};