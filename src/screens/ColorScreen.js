import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const generateColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(colors);
    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <View>
      <Button
        title="Generate a Color"
        onPress={() => {
          setColors([...colors, generateColor()]);
        }}
      />
      <FlatList
        numColumns={3}
        data={colors}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: '33%', backgroundColor: item }}></View>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
