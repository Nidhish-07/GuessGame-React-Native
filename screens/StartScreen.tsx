import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

type Props = {};

const StartScreen = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: "salmon",
    elevation: 4,
    shadowColor: "#2d2d2d",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
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
