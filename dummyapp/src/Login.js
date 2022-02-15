import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Colors, Sizes } from "../Constants/Constants";
import { Header } from "../Components/Header";

const Login = (props) => {
  const [selected, setSelected] = useState("");

  return (
    <View style={{ backgroundColor: Colors.backgroundColor, flex: 1 }}>
      <Image
        source={require("../assets/loginBG.png")}
        style={{
          height: Sizes.height,
          width: Sizes.width,
          position: "absolute",
        }}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.header}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Ionicons name="arrow-back" size={28} color={Colors.white} />
      </TouchableOpacity>
      <View style={{ marginTop: 20, padding: Sizes.padding, height: 50 }}>
        <Text
          style={{
            fontFamily: "Header-Text",
            color: Colors.white,
            fontSize: 30,
          }}
        >
          WELCOME
        </Text>
        <Text
          style={{
            fontFamily: "Header-Text",
            color: Colors.white,
            fontSize: 30,
          }}
        >
          BACK!
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          bottom: 100,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            width: Sizes.width - 40,
            height: 40,
            paddingLeft: Sizes.padding,
            marginTop: 20,
            borderBottomWidth: 2,
            borderBottomColor: selected === "email" ? "blue" : "grey",
          }}
        >
          <Ionicons
            name="mail"
            size={24}
            color={selected === "email" ? "blue" : "grey"}
          />
          <TextInput
            onFocus={() => {
              setSelected("email");
            }}
            onBlur={() => {
              setSelected("");
            }}
            placeholder="Email"
            placeholderTextColor={selected == "email" ? "blue" : "grey"}
            style={{
              flex: 1,
              height: 40,
              paddingLeft: Sizes.padding,
              color: selected === "email" ? "blue" : "grey",
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            width: Sizes.width - 40,
            height: 40,
            paddingLeft: Sizes.padding,
            marginTop: 10,
            borderBottomWidth: 2,

            borderBottomColor: selected === "password" ? "blue" : "grey",
          }}
          // style={styles.text}
        >
          <Entypo
            name="key"
            size={24}
            color={selected === "password" ? "blue" : "grey"}
          />
          <TextInput
            onFocus={() => {
              setSelected("password");
            }}
            onBlur={() => {
              setSelected("");
            }}
            placeholder="Password"
            placeholderTextColor={selected == "password" ? "blue" : "grey"}
            style={{
              height: 40,
              paddingLeft: Sizes.padding,
              color: selected === "password" ? "blue" : "grey",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SignUp")}
          style={{
            marginTop: Sizes.padding,
            borderWidth: 1,
            borderColor: Colors.primary,
            height: 40,
            width: Sizes.width - 40,
            top: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontFamily: "Medium-Text",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    top: Platform === "ios" ? 40 : 20,

    padding: Sizes.padding,
  },
  text: {
    alignItems: "center",
    flexDirection: "row",
    width: Sizes.width - 40,
    height: 40,
    paddingLeft: Sizes.padding,
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
  },
  button: {
    marginTop: Sizes.padding,
    backgroundColor: Colors.primary,
    height: 40,
    width: Sizes.width - 40,
    top: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttontext: {
    color: Colors.black,
    fontFamily: "Medium-Text",
    fontWeight: "bold",
    fontSize: 20,
  },
});
