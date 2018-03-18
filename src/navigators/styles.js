import React from 'react';
import {MadeHeaderLogo} from '../components/common';
import {Button, Text} from 'native-base';
import firebase from 'react-native-firebase';

export default ({navigation}) => {
  const params = navigation.state.params || {};
  return {
    headerTitle: <MadeHeaderLogo/>,
    headerStyle: {
      backgroundColor: '#2ECC71',
      // get rid of ugly shadow
      shadowColor: undefined,
      shadowOpacity: undefined,
      shadowRadius: undefined,
      shadowOffset: undefined,
      elevation: 0,
      paddingVertical: 10,
      height: 90,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (params.showLogOut ?
        <Button small style={{alignSelf: 'center', marginRight: 15}}
                onPress={() => firebase.auth().
                    signOut().
                    then(navigation.navigate('Auth'))}>
          <Text>Sair</Text>
        </Button> : null
    ),
  };
};