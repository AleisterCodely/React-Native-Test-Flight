import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CounterScreen=()=>{
    const [counter, setCounter]=useState(0);
    return (
        <View>
            <Text>Clicked {counter} Times.</Text>
            <Button title="Click me to add" onPress={()=>setCounter(counter+1)}/>
            <Button color='red' title="Click me to substract" onPress={()=>setCounter(counter-1)}/>
        </View>
    );
};

const styles = StyleSheet.create({
})

export default CounterScreen;