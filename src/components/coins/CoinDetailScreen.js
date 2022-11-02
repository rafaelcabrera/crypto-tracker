import React, {Component} from 'react';
import {View, Text} from 'react-native';

class CoinDetailScreen extends Component {
  state = {coin: {}};

getSymbolIcon = () => {
  return `https://c1.coinlore.com/img/25x25/${symbol}.png`
}

  componentDidMount() {
    const {coin} = this.props.params;
    this.props.navigation.setOptions({title: coin.symbol});
    this.setState({coin});
  };

  render() {
    return (
      <View>
        <View>
          <Text>{coin.name}</Text>
        </View>
      </View>
    );
  }
}

export default CoinDetailScreen;
