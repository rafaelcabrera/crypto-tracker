import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Colors from '../../res/colors';

const CoinsItem = ({item, onPress}) => {
  getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      // return require('../../assets/arrow_down@2x.png');
    } else {
      // return require('../../assets/arrow_up@2x.png');

    }
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Text styles={styles.symbolText}>{item.name}</Text>
        <Text styles={styles.nameText}>{item.symbol}</Text>
        <Text styles={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View styles={styles.row}>
        <Text styles={styles.percentText}>{item.percent_change_1h}</Text>
        <Image source={this.getImgArrow} styles={styles.imgIcon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    paddingLeft: Platform.OS == 'ios' ? 16 : 16,
    marginLeft: Platform.OS == 'ios' ? 16 : 0,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 14,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 16,
  },
  priceText: {
    color: '#fff',
    fontSize: 12,
  },
  percentText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 8,
  },
  imgIcon: {
    width: 22,
    height: 22,
  },
});

export default CoinsItem;
