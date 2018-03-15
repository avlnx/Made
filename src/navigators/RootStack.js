import {AuthLoadingScreen} from '../screens';
import {SwitchNavigator} from 'react-navigation';
import {AppStack, AuthStack, StoreStack} from './';

const RootStack =  SwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      Store: StoreStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
);

export {RootStack};