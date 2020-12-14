import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ColorAdjustBit from '../Bits/ColorAdjustBit';

const INCREMENT = 15;

const SquareScreen = () => {
    const reducer=(state, action)=>{
        switch(action.colorToChange){
            case 'red':
                return {...state, red: state.red+action.amount};
            case 'green':
                return {...state, green: state.green+action.amount};
            case 'blue':
                return {...state, blue: state.blue+action.amount};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  return (
    <View>
      <ColorAdjustBit
        onIncrease={() => dispatch({colorToChange: 'red', amount: INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'red', amount: INCREMENT*-1})}
        color="Red"
      />
      <ColorAdjustBit
        onIncrease={() => dispatch({colorToChange: 'green', amount: INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'green', amount: INCREMENT*-1})}
        color="Green"
      />
      <ColorAdjustBit
        onIncrease={() => dispatch({colorToChange: 'blue', amount: INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'blue', amount: INCREMENT*-1})}
        color="Blue"
      />
      <View style={{ height: 200, width: 200, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
