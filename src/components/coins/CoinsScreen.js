/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { View, Text, Pressable , StyleSheet} from "react-native";
class CoinsScreen extends Component {
  handlePess = () => {
    console.log("go to Detail", this.props);
  };
  render() {
    return (
      <View styles={styles.container}>
        <Text>Coins 4 Coins</Text>
        <Pressable style={styles.btn} onPress={this.handlePess}>
          <Text>ir a Detail</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "red",
  },
  btn: {
    padding: 8,
    backgroundColor: "blue"

  }
})

export default CoinsScreen;
