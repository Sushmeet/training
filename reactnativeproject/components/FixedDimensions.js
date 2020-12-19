import React from 'react';
import { View } from 'react-native';

/*
The general way to set the dimensions of a component is by adding a fixed width
and height to style. All dimensions in React Native are unitless, and represent
density-independent pixels.
*/
const FixedDimensions = () => {
  return (
    <View>
      <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
      <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}></View>
      <View style={{ width: 150, height: 150, backgroundColor: 'blue' }}></View>
    </View>
  );
};

export default FixedDimensions;
