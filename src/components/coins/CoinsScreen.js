import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet, TextComponent} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Http from '../../libs/http';

class CoinsScreen extends Component {
  state = {coins: []};

  componentDidMount = async () => {
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );

    this.setState({coins: res.data});
  };

  handlePress = () => {
    this.props.navigation.navigate('CoinDetail');
    console.log('Click');
  };
  render() {

    const {coins} = this.state;

    return (
      <View style={styles.container}>
        <FlatList
        data ={coins}
        renderItem={({item}) => <Text>{item.name}</Text>}>
          </FlatList>
      </View>
    );
  }
}
// export const CoinsScreen = ({ navigation }) => {
//   const handlePess = () => {
//       navigation.navigate('CoinDetailScreen')
//   }
//   return (
//       <View style={styles.container}>
//           <Text style={styles.titleText}>CoinsScreen </Text>
//           <Pressable style={styles.btn} onPress={handlePess}>
//               <Text style={styles.btnText}>Ir a detail</Text>
//           </Pressable>
//       </View>
//   )
// }
export default CoinsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tittleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: '#0000aa',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});
