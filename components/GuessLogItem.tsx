import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = { roundNumber: number; guess: number };

const GuessLogItem = (props: Props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.logText}>#{props.roundNumber}</Text>
      <Text style={styles.logText}>Computer's guess: {props.guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#643244",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#312412",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  logText: {
    color: "#fff",
  },
});
