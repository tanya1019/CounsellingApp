import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors, Sizes } from "../Constants/Constants";

const FindCounsellorData = ({
  item,
  navigation,
  selectedCounsellor,
  setSelectedCounsellor,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedCounsellor(item.id);
      }}
      style={{
        width: Sizes.width / 2 - 20,
        backgroundColor:
          selectedCounsellor === item.id ? Colors.backgroundColor : "#2a2a2a",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Image
        source={{
          uri:
            item && item.image && item.image.original
              ? item.image.original
              : "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        }}
        style={{ width: 70, height: 70, borderRadius: 70 }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Regular-Text",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingVertical: 2,
          }}
        >
          Dr. {item.name.replace("Dr.", "")}
        </Text>
        <Text
          style={{
            fontFamily: "Regular-Text",
            fontSize: 18,
            //   fontWeight: "bold",
            color: Colors.primary,
            paddingVertical: 2,
          }}
        >
          {item && item.country && item.country.name
            ? item.country.name
            : "unknown"}
        </Text>
        <Text
          style={{
            fontFamily: "Regular-Text",
            fontSize: 18,
            //   fontWeight: "bold",
            color: Colors.white,
            paddingVertical: 2,
          }}
        >
          MBBS
        </Text>
        {selectedCounsellor == item.id ? (
          <Text
            style={{
              fontFamily: "Regular-Text",
              fontSize: 18,
              //   fontWeight: "bold",
              color: Colors.primary,
              paddingVertical: 2,
            }}
          >
            Cients 50+
          </Text>
        ) : null}

        {selectedCounsellor == item.id ? (
          <TouchableOpacity
            style={{
              height: 30,
              width: 90,
              borderWidth: 1,
              borderColor: "yellow",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginTop: Sizes.margin,
            }}
            onPress={() => {
              navigation.navigate("CounsellorDetail", item);
            }}
          >
            <Text style={{ color: "yellow", alignSelf: "center" }}>
              View Details
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default FindCounsellorData;

const styles = StyleSheet.create({});
