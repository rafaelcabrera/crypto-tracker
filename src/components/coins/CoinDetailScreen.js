import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

class CoinDetailScreen extends Component {
  handlePress = () => {
    console.log('go to detail', this.props);
    this.props.navigation.navigate('CoinsDetail');
  };

  render() {
    return (
      <View>
        <Text> Coin Detail Screen</Text>
      </View>
    );
  }
}

export default CoinDetailScreen;
