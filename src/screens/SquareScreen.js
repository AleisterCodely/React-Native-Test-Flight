import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ColorAdjustBit from '../Bits/ColorAdjustBit';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const INCREMENT = 15;

  return (
    <View>
      <ColorAdjustBit
        onIncrease={() => setRed(red + INCREMENT > 255 ? red + 0 : red + INCREMENT)}
        onDecrease={() => setRed(red - INCREMENT <= 0 ? red - 0 : red - INCREMENT)}
        color="Red"
      />
      <ColorAdjustBit
        onIncrease={() => setGreen(green + INCREMENT > 255 ? green + 0 : green + INCREMENT)}
        onDecrease={() => setGreen(green - INCREMENT <= 0 ? green - 0 : green - INCREMENT)}
        color="Green"
      />
      <ColorAdjustBit
        onIncrease={() => setBlue(blue + INCREMENT > 255 ? blue + 0 : blue + INCREMENT)}
        onDecrease={() => setBlue(blue - INCREMENT <= 0 ? blue - 0 : blue - INCREMENT)}
        color="Blue"
      />
      <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
