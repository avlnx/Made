import {WelcomeScreen} from '../screens';
import {StackNavigator} from 'react-navigation';
import navOptions from './styles';

const AuthStack = StackNavigator(
    {
      Welcome: {
        screen: WelcomeScreen
      },
    },
    {
      initialRouteName: 'Welcome',
      navigationOptions: navOptions,
    },
);

export {AuthStack};