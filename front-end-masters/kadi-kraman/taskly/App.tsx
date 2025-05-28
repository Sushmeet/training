// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Open up App.tsx to start working on your app SUSHI!2
        </Text>
      </View>
      {/* 
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorLightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomColor: theme.colorSerulian,
    borderBottomWidth: 1,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
