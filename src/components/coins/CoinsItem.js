import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CoinsItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text styles={styles.symbolText}>{item.name}</Text>
        <Text styles={styles.nameText}>{item.symbol}</Text>
        <Text styles={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
      <Text style={styles.percentText}>{item.percent_change_1h}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
  },
  priceText: {
    color: '#fff',
    fontSize: 12,
  },
  percentText:{
    color: '#fff',
    fontSize:12,
  }
});

export default CoinsItem;
