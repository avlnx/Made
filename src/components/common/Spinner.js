/* DEPRECATED - TODO: update to Loading component and state message */
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
// import Spinner from 'react-native-spinkit';

const Spinner = () => {
  return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
      }}>
        <ActivityIndicator/>
      </View>
  );
};

export {Spinner};