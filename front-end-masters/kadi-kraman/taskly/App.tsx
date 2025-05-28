// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ShoppingListItem from './components/ShoppingListItem';
import { theme } from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Juice" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorLightBlue,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
