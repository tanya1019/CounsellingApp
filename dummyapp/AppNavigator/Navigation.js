import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FindCounsellor from "../DrawerScreens/FindCounsellor";
import ArticleDetails from "../src/ArticleDetails";
import CounsellorDetail from "../src/CounsellorDetail";
import Home from "../src/Home";
import Login from "../src/Login";
import SignUp from "../src/SignUp";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName={CounsellorDetail}
      >
        <Stack.Screen component={FindCounsellor} name="FindCounsellor" />
        <Stack.Screen component={SignUp} name="SignUp" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={CounsellorDetail} name="CounsellorDetail" />

        <Stack.Screen component={ArticleDetails} name="ArticleDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
