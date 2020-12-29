import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const url = 'https://color-palette-api.kadikraman.now.sh/palettes';
  const newColorPalette = route.params ? route.params.newPallette : undefined;

  const [colorPalette, setcolorPalette] = useState([]);
  const [isRefreshing, setRefreshing] = useState(false);

  const fetchColorPallette = useCallback(async () => {
    const response = await fetch(url);

    if (response.ok) {
      const palettes = await response.json();
      setcolorPalette(palettes);
    }
    // colorPalette //[{colors: [], paletteName: "somename", id: 9}]
  }, []);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchColorPallette();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [fetchColorPallette]);

  useEffect(() => {
    fetchColorPallette();
  }, [fetchColorPallette]);

  useEffect(() => {
    if (newColorPalette) {
      setcolorPalette((currentColorPalette) => [
        newColorPalette,
        ...currentColorPalette,
      ]);
    }
  }, [newColorPalette]);

  const SOLARIZED = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];
  const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
  ];
  const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
  ];

  const COLOR_PALETTES = [
    { paletteName: 'Solarized', colors: SOLARIZED },
    { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
    { paletteName: 'Rainbow', colors: RAINBOW },
  ];

  const navigateToColorPalette = (item) => {
    navigation.navigate('ColorPalette', item);
  };

  const renderItem = ({ item }) => {
    return (
      <PalettePreview
        onPress={() => navigation.navigate('ColorPalette', item)}
        palette={item}
      />
      // <Pressable
      //   onPress={() => {
      //     navigation.navigate('ColorPalette', item);
      //   }}
      //   style={({ pressed }) => [
      //     {
      //       backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
      //     },
      //     styles.wrapperCustom,
      //   ]}
      // >
      //   <Text style={styles.text}>{item.paletteName}</Text>
      // </Pressable>
    );
  };

  const modalButton = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPaletteModal')}
        >
          <Text style={styles.buttonText}>Add a Color Scheme</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={colorPalette}
        renderItem={renderItem}
        keyExtractor={(item) => item.paletteName}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => handleRefresh()}
            // onRefresh={handleRefresh}
            title={'Please Wait Refreshing'} // ios specific check android property
            tintColor={'red'} // ios specific check android property
          />
        }
        ListHeaderComponent={modalButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    color: 'green',
    alignSelf: 'center',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 20,
  },
});

export default Home;
