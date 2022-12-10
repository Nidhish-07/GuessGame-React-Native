import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  FlatListProps,
} from "react-native";
import React from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/GuessLogItem";

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
  const [guessRounds, setGuessedRounds] = React.useState<number[]>([
    initialGuess,
  ]);

  React.useEffect(() => {
    if (guessedNumber === props.userNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [guessedNumber, props.onGameOver, props.userNumber]);

  React.useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
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
    setGuessedRounds((prevRounds: number[]): number[] => [
      newRandomNumber,
      ...prevRounds,
    ]);
  };

  const guessRoundListLength: number = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Computer's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <View>
        <InstructionText style={styles.instructionText}>
          Higher or Low?
        </InstructionText>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add"></Ionicons>
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove"></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(
          (guessRound): React.ReactNode => (
            <Text key={guessRound}>{guessRound}</Text>
          )
        )} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            ></GuessLogItem>
          )}
          keyExtractor={(item): string => item.toString()}
        ></FlatList>
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
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  instructionText: {
    margin: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
