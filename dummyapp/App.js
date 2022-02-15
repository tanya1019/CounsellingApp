import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./AppNavigator/Navigation";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Provider } from "react-native-paper";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "Bold-Text": require("./assets/Fonts/CormorantGaramond-Bold.ttf"),
      "Medium-Text": require("./assets/Fonts/CormorantGaramond-Medium.ttf"),
      "Regular-Text": require("./assets/Fonts/CormorantGaramond-Regular.ttf"),
      "Header-Text": require("./assets/Fonts/MochiyPopPOne-Regular.ttf"),
      "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
      "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
      "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
      "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
      "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
      "IBM-Regular": require("./assets/fonts/Inter-Regular.ttf"),
      "Inter-Semi": require("./assets/fonts/Inter-SemiBold.ttf"),
      "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    });
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={() => fetchFonts()}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
