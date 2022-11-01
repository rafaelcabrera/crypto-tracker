import React, {Component} from 'react';
import {View, Text} from 'react-native';

class CoinDetailScreen extends Component {
  state = {coin: {}};


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
