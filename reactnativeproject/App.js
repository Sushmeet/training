import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors sushi
        </Text>
      </View> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
