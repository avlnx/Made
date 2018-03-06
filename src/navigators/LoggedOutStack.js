import {StackNavigator} from 'react-navigation';
import {LoginScreen, WelcomeScreen} from '../screens';

const LoggedOutStack = StackNavigator(
    {
      Welcome: {
        screen: WelcomeScreen
      },
      Login: {
        screen: LoginScreen,
      },
    },
    {
      initialScreen: 'Welcome'
      // headerMode: 'none',
    },
);

export {LoggedOutStack};