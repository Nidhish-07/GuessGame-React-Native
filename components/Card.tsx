import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = { children: React.ReactNode };

const Card = (props: Props) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 36,
    backgroundColor: "salmon",
    elevation: 4,
    shadowColor: "#2d2d2d",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
