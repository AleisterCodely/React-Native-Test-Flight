import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ComponentScreen=()=>{
    const greeting=<Text style={styles.textStyle}>Getting Started with React Native!</Text>
    const name='Legion'
    return (
        <View>
            {greeting}
            <Text style={{fontSize: 20}}>Our name is {name}</Text>
        </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentScreen;