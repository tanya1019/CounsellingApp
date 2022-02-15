import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Colors, Sizes } from "../Constants/Constants";
import { Ionicons } from "@expo/vector-icons";

const CounsellorDetailModal = ({ setAppointmentType, hideModal }) => {
  const [selected, setSelected] = useState("");
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          setSelected("Chat");
          setAppointmentType("Chat");
        }}
        style={{
          height: 300,
          flex: 1,
          backgroundColor: selected === "Chat" ? Colors.primary : "#2f2f2f",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selected === "Chat" ? (
          <Ionicons name="chatbox-outline" size={35} color={Colors.yellow} />
        ) : (
          <Ionicons name="chatbox" size={35} color={Colors.yellow} />
        )}
        <Text
          style={{
            fontFamily: "DMSans-Bold",
            fontSize: 18,
            color: Colors.white,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Chat {"\n"} Consultation
        </Text>

        <Text
          style={{
            fontFamily: "DMSans-Bold",
            fontSize: 18,
            color: selected === "Chat" ? Colors.white : "#50CB93",
            marginTop: 5,
          }}
        >
          Rs. 200/-
        </Text>
        {selected === "Chat" ? (
          <TouchableOpacity
            onPress={() => {
              hideModal();
            }}
            style={{
              height: 40,
              width: 100,
              borderWidth: 2,
              borderColor: Colors.yellow,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: Colors.yellow,
                fontWeight: "DMSans-Bold",
                fontSize: 16,
              }}
            >
              Confirm
            </Text>
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelected("Video");
          setAppointmentType("Video");
        }}
        style={{
          height: 300,
          flex: 1,
          backgroundColor: selected === "Video" ? Colors.primary : "#2f2f2f",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selected === "Video" ? (
          <Ionicons name="ios-videocam" size={35} color={Colors.yellow} />
        ) : (
          <Ionicons name="videocam-outline" size={35} color={Colors.yellow} />
        )}
        <Text
          style={{
            fontFamily: "DMSans-Bold",
            fontSize: 18,
            color: Colors.white,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Video call {"\n"} Consultation
        </Text>

        <Text
          style={{
            fontFamily: "DMSans-Bold",
            fontSize: 18,
            color: selected === "Video" ? Colors.yellow : "#50CB93",
            marginTop: 5,
          }}
        >
          Rs. 400/-
        </Text>
        {selected === "Video" ? (
          <TouchableOpacity
            onPress={() => {
              hideModal();
            }}
            style={{
              height: 40,
              width: 100,
              borderWidth: 2,
              borderColor: Colors.yellow,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: Colors.yellow,
                fontWeight: "DMSans-Bold",
                fontSize: 16,
              }}
            >
              Confirm
            </Text>
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default CounsellorDetailModal;

const styles = StyleSheet.create({});
