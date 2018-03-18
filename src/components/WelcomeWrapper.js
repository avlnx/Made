import React from 'react';
import {View} from 'native-base';
import {MadeHeaderLogo} from './common';
import {LoginForm} from '.';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', padding: 15},
  logoWrapper: {flex: 1, padding: 30, justifyContent: 'center'},
  logo: {height: 150, width: 300},
  formWrapper: {flex: 1}
});

const WelcomeWrapper = (props) => {
  const {
    currentEmail,
    currentPassword,
    loginUserAction,
    updateUserEmailInput,
    updateUserPasswordInput,
    toggleLostPasswordModeAction,
    sendPasswordRecoveryEmailAction,
    lostPasswordMode,
  } = props;
  return (
      <View style={styles.containerStyle}>
        <View style={styles.logoWrapper}>
          <MadeHeaderLogo style={styles.logo}/>
        </View>
        <View style={styles.formWrapper}>
          <LoginForm currentEmail={currentEmail}
                     currentPassword={currentPassword}
                     loginUserAction={loginUserAction}
                     updateUserEmailInput={updateUserEmailInput}
                     updateUserPasswordInput={updateUserPasswordInput}
                     toggleLostPasswordModeAction={toggleLostPasswordModeAction}
                     sendPasswordRecoveryEmailAction={sendPasswordRecoveryEmailAction}
                     lostPasswordMode={lostPasswordMode}/>
        </View>
      </View>
  );
};

export {WelcomeWrapper};