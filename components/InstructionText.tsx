import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = { children: React.ReactNode; style?: any };

const InstructionText = (props: Props) => {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: "#d308d0",
    fontSize: 24,
  },
});
