import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ColorAdjustBit from '../Bits/ColorAdjustBit';

const INCREMENT = 15;

const SquareScreen = () => {
    const reducer=(state, payload)=>{
        switch(payload.type){
            case 'change_red':
                return state.red+payload.amount>255||state.red+payload.amount<0 ? state : {...state, red: state.red+payload.amount};
            case 'change_green':
                return state.green+payload.amount>255||state.green+payload.amount<0 ? state : {...state, green: state.green+payload.amount};
            case 'change_blue':
                return state.blue+payload.amount>255||state.blue+payload.amount<0 ? state : {...state, blue: state.blue+payload.amount};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

  return (
    <View>
      <ColorAdjustBit
        onIncrease={() => dispatch({type: 'change_red', amount: INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', amount: INCREMENT*-1})}
        color="Red"
      />
      <ColorAdjustBit
        onIncrease={() => dispatch({type: 'change_green', amount: INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', amount: INCREMENT*-1})}
        color="Green"
      />
      <ColorAdjustBit
        onIncrease={() => dispatch({type: 'change_blue', amount: INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', amount: INCREMENT*-1})}
        color="Blue"
      />
      <View style={{ height: 200, width: 200, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
