import React from 'react';
import { View } from 'react-native';

const FlexDimensionsBasics = () => {
    console.log('flex-----')
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View>
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
      <View style={{ flex: 2, backgroundColor: 'red' }} />
      <View style={{ flex: 3, backgroundColor: 'green' }} />
    </View>
  );
};

export default FlexDimensionsBasics;
