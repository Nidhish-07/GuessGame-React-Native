import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

type Props = { onPick: Function };

const StartScreen = (props: Props) => {
  const [enteredNumber, setEnteredNumber] = React.useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const enteredNumberValue = parseInt(enteredNumber);

    if (
      isNaN(enteredNumberValue) ||
      enteredNumberValue <= 0 ||
      enteredNumberValue > 99
    ) {
      return Alert.alert("Invalid", "Number is not in range of 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }
    props.onPick(enteredNumberValue);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, marginTop: 100, alignItems: "center", padding: 24 },

  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#37ec58",
    borderBottomWidth: 2,
    color: "#37ec58",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
