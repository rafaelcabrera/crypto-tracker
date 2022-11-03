import React, {Component} from 'react';
import {View,  Image, Text, StyleSheet} from 'react-native';

class CoinDetailScreen extends Component {
  state = {coin: {}};

getSymbolIcon = (name) => {

  if(name){
    const symbol = name.toLowerCase().replace(" ", "-");
  

  return `https://c1.coinlore.com/img/25x25/${symbol}.png`
}
}

  componentDidMount() {
    const {coin} = this.props.route.params;
    this.props.navigation.setOptions({title: coin.symbol});
    this.setState({coin});
  };

  render() {
    return (
      <View>
        <View>
          <Image style = {styles.iconImg} source={{uri: this.getSymbolIcon(coin.name)}}/>
          <Text>{coin.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconImg: {
    width:25,
    height:25,
  },
})

export default CoinDetailScreen;
