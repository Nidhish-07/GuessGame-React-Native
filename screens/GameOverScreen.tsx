import {
  StyleSheet,
  Text,
  View,
  Image,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

type Props = {
  roundsNumber: number;
  userNumber: number;
  onRestartGame: (event: GestureResponderEvent) => void;
};

const GameOverScreen = (props: Props) => {
  return (
    <View style={styles.screenContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        {/* <Image source={require('./assets/success.png')} style={styles.image}></Image> */}
      </View>
      <Text style={styles.summaryText}>
        Your phone{" "}
        <Text style={styles.highlightText}>{props.roundsNumber}</Text> need to
        guess <Text style={styles.highlightText}>{props.userNumber}</Text>
      </Text>
      <PrimaryButton onPress={props.onRestartGame}>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: "#96f134",
    overflow: "hidden",
    marginVertical: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    color: "#523131",
  },
});
