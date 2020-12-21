import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ text, hexCode }) => {
  const color = {
    backgroundColor: hexCode,
  };

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, color]}>
      {/* <Image style={styles.image} source={require('../assets/Need-Help.png')} /> */}
      <Text style={[styles.text, textColor]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 60,
    // height: 60,
    marginBottom: 10,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    // flex: 1,// don't use flex it messes up the display of box.
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  // image: {
  //   width: 40,
  //   height: 40,
  // },
});

export default ColorBox;
