import {StackNavigator} from 'react-navigation';
import {DashboardScreen} from '../screens';
import {ModalStack} from './ModalStack';

const LoggedInStack = StackNavigator(
    {
      Dashboard: {
        screen: DashboardScreen,
      },
      Modal: {
        screen: ModalStack,
      },
    },
    {
      headerMode: 'none',
    },
);

export {LoggedInStack};