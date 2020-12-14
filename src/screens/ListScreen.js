import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  const Demons = [
    { name: 'Decarabia', legions: '30' },
    { name: 'Leraje', legions: '30' },
    { name: 'Haagenti', legions: '33' },
    { name: 'Seere', legions: '26' },
  ];
  return (
    <View>
      <FlatList
        data={Demons}
        //This sucks, why not just let me use the index as a key? indexes are already unique
        keyExtractor={demon => demon.name}
        //Suck ends
        renderItem={({ item, index }) => {
          return (
            <Text key={index} style={styles.textStyle}>
              {index + 1}.- {item.name}, with {item.legions} legions.
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25,
  },
});

export default ListScreen;
