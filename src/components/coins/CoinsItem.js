import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CoinsItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text styles={styles.symbolText}>{item.name}</Text>
        <Text styles={styles.nameText}>{item.symbol}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  nameText: {
    color: '#fff',
    fontSize:14,
  }
});

export default CoinsItem;
