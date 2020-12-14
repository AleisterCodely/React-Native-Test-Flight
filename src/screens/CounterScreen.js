import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const reducer=(state, payload)=>{
        switch(payload.type){
            case 'add': return {...state, counter: state.counter+1};
            case 'substract': return {...state, counter: state.counter-1};
            default: return state;
        }
    }


  const [state, dispatch] = useReducer(reducer, {counter: 0});

  return (
    <View>
      <Text>Clicked {state.counter} Times.</Text>
      <Button title="Click me to add" onPress={() => dispatch({type: 'add'})} />
      <Button color="red" title="Click me to substract" onPress={() => dispatch({type: 'substract'})} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
