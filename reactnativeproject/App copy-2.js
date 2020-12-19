import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>Hello World Again!</Text>
      </View>
    </SafeAreaView>
  );
};

// Styling In react Native all styling is
// done via inline styling
const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
    // marginHorizontal: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
});

export default App;
