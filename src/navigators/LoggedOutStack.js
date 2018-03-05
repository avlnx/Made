import {StackNavigator} from 'react-navigation';
import {LoginScreen, WelcomeScreen} from '../components/screens';

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
      // headerMode: 'none',
    },
);

export {LoggedOutStack};