import {StackNavigator} from 'react-navigation';
import {LoggedOutStack, LoggedInStack} from './index';
import {OnboardingScreen} from '../components/screens';

const RootStack = StackNavigator(
    {
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