import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";

type Props = { userNumber: number; onGameOver: Function };

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
};

let minBoundary: number = 1;
let maxBoundary: number = 100;

const GameScreen = (props: Props) => {
  const initialGuess: number = generateRandomNumber(1, 100, props.userNumber);
  const [guessedNumber, setGuessedNumber] =
    React.useState<number>(initialGuess);

  React.useEffect(() => {
    if (guessedNumber === props.userNumber) {
      props.onGameOver();
    }
  }, [guessedNumber, props.onGameOver, props.userNumber]);
  const nextGuessHandler = (direction: string): void => {
    if (
      (direction === "lower" && guessedNumber < props.userNumber) ||
      (direction === "greater" && guessedNumber > props.userNumber)
    ) {
      Alert.alert("This is wrong");
      return;
    }
    if (direction === "lower") {
      maxBoundary = guessedNumber;
    } else {
      minBoundary = guessedNumber + 1;
    }
    const newRandomNumber: number = generateRandomNumber(
      minBoundary,
      maxBoundary,
      guessedNumber
    );
    setGuessedNumber(newRandomNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Computer's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <View>
        <InstructionText>Higher or Low?</InstructionText>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
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
