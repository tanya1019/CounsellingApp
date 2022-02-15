import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Header } from "../Components/Header";
import { Colors, Sizes } from "../Constants/Constants";
import axios from "axios";
import FindCounsellorData from "../Components/FindCounsellorData";

const FindCounsellor = (props) => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchpeople = async () => {
      const response = await axios.get("https://api.tvmaze.com/people");
      console.log(response);
      setPeople(response.data);
    };
    fetchpeople();
  }, []);

  const [selectedCounsellor, setSelectedCounsellor] = useState(false);

  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        flex: 1,
      }}
    >
      <Header>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: Sizes.padding + 20,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "flex-start",
            }}
          >
            <Ionicons
              name="arrow-back"
              size={28}
              color={Colors.white}
              style={{ alignSelf: "flex-start", paddingLeft: Sizes.padding }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Header-Text",
              color: "white",
              fontSize: 20,
            }}
          >
            Find Counsellor
          </Text>
          <View></View>
        </View>
      </Header>

      <View
        style={{
          height: 50,
          width: Sizes.width - 40,
          backgroundColor: "white",
          flexDirection: "row",
          borderRadius: 30,
          alignItems: "center",
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        <FontAwesome
          name="search"
          size={24}
          color="grey"
          style={{ paddingLeft: Sizes.padding }}
        />
        <TextInput
          style={{ paddingLeft: 20, color: "black", flex: 1 }}
          placeholder="Find Counsellor"
          placeholderTextColor={"grey"}
        />
      </View>

      <FlatList
        data={people}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <FindCounsellorData
              navigation={props.navigation}
              item={item}
              selectedCounsellor={selectedCounsellor}
              setSelectedCounsellor={setSelectedCounsellor}
            />
          );
        }}
      />
    </View>
  );
};

export default FindCounsellor;

const styles = StyleSheet.create({});
