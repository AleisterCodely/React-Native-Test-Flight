import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageBit = ({ image, title, review }) => {
  return (
    <View>
      <Image source={image} />
      <Text>Pictured: {title}</Text>
      <Text>Review: {review}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageBit;
