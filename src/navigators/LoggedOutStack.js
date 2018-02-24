import {StackNavigator} from 'react-navigation';
import {SplashScreen, LoginScreen} from '../components/screens';

const LoggedOutStack = StackNavigator(
    {
      Splash: {
        screen: SplashScreen,
      },
      Login: {
        screen: LoginScreen,
      },
    },
    {
      headerMode: 'none',
    },
);

export {LoggedOutStack};