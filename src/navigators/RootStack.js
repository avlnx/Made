import {AuthLoadingScreen} from '../screens';
import {SwitchNavigator} from 'react-navigation';
import {AppStack, AuthStack, StoreStack} from './';
import {MadeHeaderLogo} from '../components/common';
import React from 'react';

const RootStack = SwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      Store: StoreStack,
    },
    {
      initialRouteName: 'AuthLoading',
      navigationOptions: {
        // headerTitle: <MadeHeaderLogo/>,
        headerStyle: {
          backgroundColor: '#2ECC71',
        }
        // headerStyle: {
        //   backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
      },
    },
);

export {RootStack};