import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route, navigation }) => {
  const { paletteName, colors } = route.params;
  const renderItem = ({ item, index, separators }) => {
    return <ColorBox text={item.text} hexCode={item.hexCode} />;
  };

  return (
    <View style={styles.container}>
      {/* Give the status bar stuff like battery, wifi and time a Black color */}
      {/* <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" /> */}
      <FlatList
        data={colors}
        renderItem={renderItem}
        keyExtractor={(item) => item.hexCode}
        ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
        // horizontal
        // numColumns="2"
        // columnWrapperStyle={{ justifyContent: 'space-around' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: '#eee8d5',
    flex: 1,
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

export default ColorPalette;
