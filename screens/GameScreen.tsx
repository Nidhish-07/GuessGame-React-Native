import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/Title";

type Props = {};

const GameScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Title>Computer's Guess</Title>
      <View>
        <Text>Higher or Low?</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
 
});
