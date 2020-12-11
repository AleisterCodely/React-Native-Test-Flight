import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Welcome!</Text>
      <Button 
      title="Go to the Demon List :D"
      onPress={()=>navigation.navigate('List')}
      />
      <Button 
      title="Go to the Shit Component :D"
      onPress={()=>navigation.navigate('Components')}
      />
      <Button 
      title="Go to the Image Component :D"
      onPress={()=>navigation.navigate('Image')}
      />
      <Button 
      title="Go to the Counter Component :D"
      onPress={()=>navigation.navigate('Counter')}
      />
      <Button 
      title="Go to the Color Component :D"
      onPress={()=>navigation.navigate('Color')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
