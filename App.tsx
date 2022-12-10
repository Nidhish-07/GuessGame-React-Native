import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
// import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [pickedNumber, setPickedNumber] = React.useState<number|null>();
  const [gameIsOver, setGameIsOver] = React.useState<boolean>(true);
  const [guessRounds, setGuessRounds] = React.useState<number>(0);

  // const [fontsLoaded] = useFonts({
  //   "open-sans": require("../fonts/"),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading></AppLoading>;
  // }

  const pickedNumberHandler = (userNumber: number) => {
    setPickedNumber(userNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds:number) => {
    setGameIsOver(true);  
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setGuessRounds(0);
    // setGameIsOver(true);
    setPickedNumber(null);
  };
  let screen = <StartScreen onPick={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen
        userNumber={pickedNumber}
        onGameOver={gameOverHandler}
      ></GameScreen>
    );
  }

  if (gameIsOver && pickedNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={pickedNumber}
        onRestartGame={startNewGameHandler}
      ></GameOverScreen>
    );
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
