import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';
import Home from './screens/Home';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        // title: 'Home Sush', // let's not override the title on every home page.
        headerStyle: { backgroundColor: '#f4511e' }, // red color
        headerTintColor: '#fff', // change header color to red
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <MainStack.Screen
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
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        // options={({ route }) => ({ title: route.params.paletteName })}
        options={({ route }) => {
          return {
            title: route.params.paletteName,
          };
        }}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      {/* Give the status bar stuff like battery, wifi and time a white color */}
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <RootStack.Navigator
        mode="modal"
        screenOptions={{ animationEnabled: false }}
      >
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          options={{ animationEnabled: true }}
        />
      </RootStack.Navigator>
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
