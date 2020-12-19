import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const navigateToColorPalette = () => navigation.navigate('ColorPalette');

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
