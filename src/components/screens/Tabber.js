import React from 'react';
import {Text} from 'react-native';
import {Tabs, Tab} from 'react-router-navigation';

export const Tabber = () => (
    <Tabs
        tabIndicatorStyle={{backgroundColor: 'beer'}}>
      <Tab path="/tabs" component={() => <Text>Beer</Text>}/>
      <Tab path="/option2" component={() => <Text>Karaoke</Text>}/>
    </Tabs>
);