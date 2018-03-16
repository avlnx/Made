import React from 'react';
import {MadeHeaderLogo} from '../components/common';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';
import firebase from 'react-native-firebase';

export default ({navigation}) => {
  const params = navigation.state.params || {};
  return {
    headerTitle: <MadeHeaderLogo/>,
    headerStyle: {
      backgroundColor: '#2ECC71',
      // get rid of ugly shadow
      shadowColor: 'transparent',
      shadowOpacity: 0,
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      elevation: 0,
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

// export default {
//   headerTitle: <MadeHeaderLogo/>,
//   headerStyle: {
//     backgroundColor: '#2ECC71',
//     // get rid of ugly shadow
//     shadowColor: 'transparent',
//     shadowOpacity: 0,
//     shadowRadius: 0,
//     shadowOffset: {
//       height: 0,
//     },
//     elevation: 0,
//   },
//   headerTintColor: 'white',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// };