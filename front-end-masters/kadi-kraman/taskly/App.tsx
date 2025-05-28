// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { theme } from './theme';

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      'Are you sure you want to delete this',
      'This will delete it forever',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel pressed');
          },
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            console.log('Ok Pressed');
          },
        },
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity onPress={handleDelete} style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
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
    // alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomColor: theme.colorSerulian,
    borderBottomWidth: 1,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    padding: 8,
    backgroundColor: theme.colorBlack,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
