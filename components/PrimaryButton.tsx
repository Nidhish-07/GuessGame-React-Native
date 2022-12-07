import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

type Props = { children: React.ReactNode };

const PrimaryButton = (props: Props) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#f63c1c" }}
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.iosPress]
            : styles.innerContainer
        }
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    // flexDirection: "column",
    // justifyContent: "center",

  },
  innerContainer: {
    backgroundColor: "#f45033",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    // margin: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  iosPress: {
    opacity: 0.75,
  },
});
