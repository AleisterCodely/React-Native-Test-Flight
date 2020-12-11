import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageBit from '../Bits/ImageBit';

const ImageScreen=()=>{
    return (
        <View>
            <ImageBit title="The Forest" image={require('../../assets/images/forest.jpg')} review="Forest good, cozy, nobody bother me."/>
            <ImageBit title="The Sea" image={require('../../assets/images/beach.jpg')}  review="Sea good, wet, nobody bother me."/>
            <ImageBit title="The Mountain" image={require('../../assets/images/mountain.jpg')}  review="Mountain good, tall, nobody bother me."/>
        </View>
        );
};

const styles = StyleSheet.create({
})

export default ImageScreen;