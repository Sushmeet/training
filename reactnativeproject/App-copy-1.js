import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import FixedDimensions from './components/FixedDimensions';
// import FlexDimensionsBasics from './components/FlexDimensions';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello Sushi</Text>
        <Text style={styles.red}>Red text</Text>
        <Text style={styles.bigBlue}>Just Big Blue Text</Text>
        <Text style={[styles.bigBlue, styles.red]}>Big Blue then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>Red than Big Blue</Text>
        <FixedDimensions />
      </View>
    </SafeAreaView>
  );
};

// Styling In react Native all styling is
// done via inline styling
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 40,
  },
  red: {
    color: 'red',
  },
});

export default App;
