import {StackNavigator} from 'react-navigation';
import {StoreConfigModal} from '../screens';

const ModalStack = StackNavigator(
    {
      StoreConfig: {
        screen: StoreConfigModal,
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: 'StoreConfig',
    },
);

export {ModalStack};