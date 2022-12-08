import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = { children: React.ReactNode };

const Title = (props: Props) => {
  return (
    <View>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#f72148",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#f72148",
  },
});
