import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import ColorBox from '../components/ColorBox-entremetteur';

const ColorPalette = () => {
  const colors = [
    { text: 'Base03', hexCode: '#002b36' },
    { text: 'Base02', hexCode: '#073642' },
    { text: 'Base01', hexCode: '#586e75' },
    { text: 'Base00', hexCode: '#657b83' },
    { text: 'Base0', hexCode: '#839496' },
    { text: 'Base1', hexCode: '#93a1a1' },
    { text: 'Base2', hexCode: '#eee8d5' },
    { text: 'Base3', hexCode: '#fdf6e3' },
    { text: 'Yellow', hexCode: '#b58900' },
    { text: 'Orange', hexCode: '#cb4b16' },
    { text: 'Red', hexCode: '#dc322f' },
    { text: 'Magenta', hexCode: '#d33682' },
    { text: 'Violet', hexCode: '#6c71c4' },
    { text: 'Blue', hexCode: '#268bd2' },
    { text: 'Cyan', hexCode: '#2aa198' },
    { text: 'Green', hexCode: '#859900' },
  ];

  const renderItem = ({ item, index, separators }) => {
    return <ColorBox text={item.text} hexCode={item.hexCode} />;
  };

  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={require('../assets/dating-background-4.jpg')}
      >
        <FlatList
          data={colors}
          renderItem={renderItem}
          keyExtractor={(item) => item.text}
          ListHeaderComponent={<Text style={styles.text}>Solarized</Text>}
          // horizontal
          numColumns="2"
          columnWrapperStyle={{ justifyContent: 'space-around' }}
        />
      </ImageBackground>
    </View>
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
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    // width: null,
    // height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ColorPalette;
