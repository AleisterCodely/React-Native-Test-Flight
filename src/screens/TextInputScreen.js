import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextInputScreen = () => {
const [password, setPassword]=useState('');

  return (
    <View>
        <Text>Enter your Password</Text>
        <TextInput 
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newValue)=>setPassword(newValue)}
        />
        {password.length < 5 ? <Text>Password must be at least 5 characters long</Text>:null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1
  },
});

export default TextInputScreen;
