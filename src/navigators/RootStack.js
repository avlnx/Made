import {StackNavigator} from 'react-navigation';
import {LoggedOutStack} from './index';
import {OnboardingScreen} from '../components/screens';

const RootStack = StackNavigator(
    {
      LoggedOutStack: {
        screen: LoggedOutStack,
      },
      LoggedInStack: {
        screen: OnboardingScreen,
      },
    },
    {
      headerMode: 'none',
    },
);

export {RootStack};