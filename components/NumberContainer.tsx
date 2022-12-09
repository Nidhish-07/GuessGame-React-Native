import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = { children: React.ReactNode };

const NumberContainer = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#1648fa",
    padding: 24,
    borderRadius: 8,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    color: "#1648fa",
    fontSize: 36,
  },
});
