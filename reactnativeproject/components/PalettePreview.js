import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const PalettePreview = ({ onPress, palette }) => {
  const previewColorsArray = palette.colors.slice(0, 5);
  const renderItem = ({ item }) => {
    return (
      <View>
        {/* <Text style={styles.palettePreview}>{item.colorName}</Text> */}
        <View style={[styles.box, { backgroundColor: item.hexCode }]}></View>
      </View>
    );
  };
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        <Text style={styles.text}>{palette.paletteName}</Text>
        <FlatList
          horizontal
          style={styles.list}
          data={previewColorsArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.paletteName}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 30,
    height: 30,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    marginTop: 10,
    // flexDirection: 'row', doesn't work to turn the row.
  },
  text: {
    color: 'green',
    // alignSelf: 'center',
  },
  palettePreview: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});

export default PalettePreview;
