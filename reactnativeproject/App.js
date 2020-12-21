import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Give the status bar stuff like battery, wifi and time a white color */}
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Stack.Navigator
        screenOptions={{
          // title: 'Home Sush', // let's not override the title on every home page.
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   title: 'Home Sush',
          //   headerStyle: { backgroundColor: '#f4511e' },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          // }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          // options={({ route }) => ({ title: route.params.paletteName })}
          options={({ route }) => {
            return {
              title: route.params.paletteName,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    // paddingVertical: 50,
    // paddingHorizontal: 10,
  },
});

export default App;
