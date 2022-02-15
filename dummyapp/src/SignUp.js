import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Sizes, Colors } from "../Constants/Constants";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const SignUp = (props) => {
  const [selected, setSelected] = useState("");

  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        flex: 1,

        alignItems: "center",
      }}
    >
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
        onPress={() => props.navigation.navigate("Login")}
        style={{
          marginTop: 20,
          padding: Sizes.padding,
          alignSelf: "flex-start",
        }}
      >
        <Ionicons name="arrow-back" size={28} color={Colors.white} />
      </TouchableOpacity>
      <View
        style={{
          marginTop: 20,
          padding: Sizes.padding,
          height: 50,
          alignSelf: "flex-start",
        }}
      >
        <Text
          style={{
            fontFamily: "Header-Text",
            color: Colors.white,
            fontSize: 30,
          }}
        >
          CREATE
        </Text>
        <Text
          style={{
            fontFamily: "Header-Text",
            color: Colors.white,
            fontSize: 30,
          }}
        >
          ACCOUNT
        </Text>
      </View>
      <View style={{ marginTop: 250 }}>
        <View
          style={{
            width: Sizes.width - 40,
            height: 70,
            borderBottomWidth: 1,
            borderBottomColor: selected === "name" ? Colors.primary : "grey",
            alignItems: "center",

            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            name="face-profile"
            size={24}
            color={selected === "name" ? Colors.primary : "grey"}
          />
          <TextInput
            onFocus={() => setSelected("name")}
            onBlur={() => setSelected("")}
            placeholder="Name"
            placeholderTextColor={selected === "name" ? Colors.primary : "grey"}
            style={{
              paddingLeft: Sizes.padding,
              color: "white",
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            width: Sizes.width - 40,
            height: 70,
            borderBottomWidth: 1,
            borderBottomColor: selected === "email" ? Colors.primary : "grey",
            alignItems: "center",

            flexDirection: "row",
          }}
        >
          <Entypo
            name="mail"
            size={24}
            color={selected === "email" ? Colors.primary : "grey"}
          />
          <TextInput
            onFocus={() => setSelected("email")}
            onBlur={() => setSelected("")}
            placeholder="Email"
            placeholderTextColor={
              selected === "email" ? Colors.primary : "grey"
            }
            style={{
              paddingLeft: Sizes.padding,
              color: "grey",
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            width: Sizes.width - 40,
            height: 70,
            borderBottomWidth: 1,
            borderBottomColor:
              selected === "password" ? Colors.primary : "grey",
            alignItems: "center",

            flexDirection: "row",
          }}
        >
          <Entypo
            name="key"
            size={24}
            color={selected === "password" ? Colors.primary : "grey"}
          />
          <TextInput
            onFocus={() => setSelected("password")}
            onBlur={() => setSelected("")}
            placeholder="Password"
            placeholderTextColor={
              selected === "password" ? Colors.primary : "grey"
            }
            style={{
              paddingLeft: Sizes.padding,
              color: "white",
              width: "100%",
            }}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          height: 40,
          width: Sizes.width - 40,
          backgroundColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
          marginTop: Sizes.padding + 30,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 40,
          width: Sizes.width - 40,
          borderWidth: 1,
          borderColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
          marginTop: Sizes.padding,
          borderRadius: 5,
        }}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={{ color: Colors.primary, fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Header-Text",
    fontSize: 20,
    paddingTop: Sizes.padding + 20,
    color: Colors.white,
  },
  textInput: {
    width: Sizes.width - 40,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    alignItems: "center",

    flexDirection: "row",
  },
  button: {
    height: 40,
    width: Sizes.width - 40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
