import {WelcomeScreen} from '../screens';
import {StackNavigator} from 'react-navigation';

const AuthStack = StackNavigator(
    {
      Welcome: {
        screen: WelcomeScreen
      },
    },
    {
      initialRouteName: 'Welcome',
      headerMode: 'none',
    },
);

export {AuthStack};