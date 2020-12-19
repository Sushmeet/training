import React from 'react';
import {
  View,
  Text,
  // SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColorBox from './components/ColorBox-entremetteur';

const App = () => {
  const colors = [
    { text: 'Visit our Website', hexCode: '#002b36' },
    { text: 'Need Help', hexCode: '#073642' },
    { text: 'See all our event1', hexCode: '#586e75' },
    { text: 'See all our event2', hexCode: '#586e75' },
    { text: 'See all our event3', hexCode: '#586e75' },
    { text: 'See all our event4', hexCode: '#586e75' },
  ];

  const renderItem = ({ item, index, separators }) => {
    return <ColorBox text={item.text} hexCode={item.hexCode} />;
  };
  return (
    // <SafeAreaView styles={styles.SafeAreaView}>
    <ImageBackground
      style={styles.image}
      source={require('./assets/dating-background-4.jpg')}
    >
      {/* <SafeAreaView styles={styles.SafeAreaView}> */}
      <View style={styles.container}>
        <SafeAreaView styles={styles.SafeAreaView}>
          <Text style={styles.heading}>
            Here are some boxes of different colors su
          </Text>
          <FlatList
            style={styles.flatList}
            data={colors}
            renderItem={renderItem}
            keyExtractor={(item) => item.text}
            ListHeaderComponent={() => {
              return <ColorBox text="help" hexCode="#ueueu" />;
            }}
            ListHeaderComponentStyle={{ alignItems: 'center' }}
            numColumns="2"
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        </SafeAreaView>
      </View>
      {/* </SafeAreaView> */}
    </ImageBackground>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    // paddingBottom: 500,
    // paddingVertical: 500,
    // paddingHorizontal: 10,
    // backgroundColor: 'pink',
    // borderColor: 'black',
  },
  SafeAreaView: {
    flex: 1,
  },
  flatList: {
    padding: 50,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;
