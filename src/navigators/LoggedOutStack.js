import {StackNavigator} from 'react-navigation';
import {WelcomeScreen} from '../screens';

const LoggedOutStack = StackNavigator(
    {
      Welcome: {
        screen: WelcomeScreen
      },
    },
    {
      initialScreen: 'Welcome'
      // headerMode: 'none',
    },
);

export {LoggedOutStack};