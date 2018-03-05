import {StackNavigator} from 'react-navigation';
import {LoggedOutStack, LoggedInStack} from './index';
import {SplashScreen} from '../components/screens';

const RootStack = StackNavigator(
    {
      Splash: {
        screen: SplashScreen,
      },
      LoggedOutStack: {
        screen: LoggedOutStack,
      },
      LoggedInStack: {
        screen: LoggedInStack,
      },
    },
    {
      headerMode: 'none',
    },
);

export {RootStack};