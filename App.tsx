import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
// import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [pickedNumber, setPickedNumber] = React.useState<number>();

  const pickedNumberHandler = (userNumber: number) => {
    setPickedNumber(userNumber);
  };

  let screen = <StartScreen onPick={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen></GameScreen>;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <LinearGradient
          colors={["#37ec58", "#ddb52f"]}
          style={styles.rootScreen}
        >
          <ImageBackground
            source={require("./assets/images/pexels-lil-artsy-1111597.jpg")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
          >
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
