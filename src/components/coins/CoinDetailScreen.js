import React, {Component} from 'react';
import {View, Text} from 'react-native';

class CoinDetailScreen extends Component {
  handlePress = () => {
    const {coin} = this.props.params;
    console.log('go to detail', this.props);
    this.props.navigation.navigate('CoinsDetail');
  };

  render() {
    return (
      <View>
        <Text>Coin Detail Screen</Text>
      </View>
    );
  }
}

export default CoinDetailScreen;
