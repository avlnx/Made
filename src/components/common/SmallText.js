import React from 'react';
import {Text} from 'native-base';

const SmallText = (props) => {
  return (
      <Text style={[props.style, {fontSize: 14}]}>{props.children}</Text>
  );
};

export {SmallText};