import { Alert, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

type ShoppingListItemProps = {
  name: string;
  isCompleted?: boolean;
};

export default function ShoppingListItem({
  name,
  isCompleted,
}: ShoppingListItemProps) {
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.8}
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            isCompleted ? styles.buttonTextCompleted : undefined,
          ]}
        >
          Delete
        </Text>
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
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: theme.colorGrey,
    textDecorationColor: theme.colorGrey,
  },
  button: {
    padding: 8,
    backgroundColor: theme.colorBlack,
    borderRadius: 6,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  buttonTextCompleted: {
    backgroundColor: theme.colorGrey,
  },
});
