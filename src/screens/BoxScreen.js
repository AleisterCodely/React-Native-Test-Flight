import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoStyle}></View>
        <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    viewOneStyle:{
        borderWidth: 3,
        alignSelf: 'flex-start',
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    viewTwoStyle:{
        borderWidth: 3,
        alignSelf: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle:{
        borderWidth: 3,
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;
