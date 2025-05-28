import { Alert, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

type ShoppingListItemProps = {
  name: string;
};

export default function ShoppingListItem({ name }: ShoppingListItemProps) {
  const handleDelete = () => {
    Alert.alert(
      'Are you sure you want to delete this',
      `This will delete ${name} it forever`,
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
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity onPress={handleDelete} style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
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
