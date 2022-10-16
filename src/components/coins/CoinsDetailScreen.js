import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class CoinsScreen extends Component {

    handlerPress = ()=>{
        console.log("go to detail", this.props);
        this.props.navigation.navigate('CoinDetail');
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}> Coins Screen</Text>
                <Pressable style={styles.btn} onPress={this.handlerPress}>
                    <Text style={styles.btnText}>Ir a detail</Text>
                </Pressable>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  titleText: {
    color: "white",
    textAlign: "center",
  },
  btn: {
    padding: 0,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});

export default CoinsScreen;