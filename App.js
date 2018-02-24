import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class SplashScreen extends React.Component {

  render() {
    return (
        <View style={styles.screen}>
          <Text style={styles.screenText}>Splash Screen</Text>
          <Button
              onPress={() => this.props.navigation.navigate('Login')}
              title="Login"
          />
        </View>
    );
  }

  /* render function, etc */
}

class LoginScreen extends React.Component {
  render() {
    return (
        <View style={styles.screen}>
          <Text style={styles.screenText}>LoginScreen</Text>
          <Button
              onPress={() => this.props.navigation.navigate('LoggedInStack')}
              title="Login"
          />
        </View>
    );
  }
}

class OnboardingScreen extends React.Component {
  render() {
    return (
        <View style={styles.screen}>
          <Text style={styles.screenText}>Onboarding Screen</Text>
          <Button
              onPress={() => this.props.navigation.navigate('LoggedOutStack')}
              title="Sign Out"
          />
        </View>
    );
  }
}

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
    }
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 42,
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}