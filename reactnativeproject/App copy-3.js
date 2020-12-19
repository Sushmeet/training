import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <ColorBox text="Cyan: #2aa198" hexCode="#2aa198" />
        <ColorBox text="Blue: #268bd2" hexCode="#268bd2" />
        <ColorBox text="Magenta: #d33682" hexCode="#d33682" />
        <ColorBox text="Orange: #cb4b16" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});

export default App;
