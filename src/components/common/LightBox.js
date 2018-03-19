import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Button, Icon, Card, CardItem} from 'native-base';

const LightBox = (props) => {
  return (
      <View style={styles.outerContainer}>
        <Button style={styles.closeButton} light icon
                onPress={() => props.cancelAction()}>
          <Icon name={'close'}/>
        </Button>
        <Card>
          <CardItem>
            {props.children}
          </CardItem>
        </Card>
      </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    paddingTop: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 2,
  },
});

export {LightBox};