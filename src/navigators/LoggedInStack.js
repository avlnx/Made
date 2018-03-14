import {StackNavigator} from 'react-navigation';
import {DashboardScreen, StoreConfigModal} from '../screens';
import {ModalStack} from './ModalStack';

const LoggedInStack = StackNavigator(
    {
      Dashboard: {
        screen: DashboardScreen,
      },
      StoreConfig: {
        screen: StoreConfigModal,
      },
    },
    {
      headerMode: 'none',
    },
);

export {LoggedInStack};