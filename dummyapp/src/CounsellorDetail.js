import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Colors, Sizes } from "../Constants/Constants";
import { LinearGradient } from "expo-linear-gradient";
import { Modal, Portal } from "react-native-paper";
import CounsellorDetailModal from "../Components/CounsellorDetailModal";
const CounsellorDetail = (props) => {
  console.log(props);
  const item = props.route.params;

  const days = [
    {
      id: 0,
      day: "Sun",
      date: "01",
    },
    {
      id: 1,
      day: "Mon",
      date: "02",
    },
    {
      id: 2,
      day: "Tue",
      date: "03",
    },
    {
      id: 3,
      day: "Wed",
      date: "04",
    },
    {
      id: 4,
      day: "Thu",
      date: "05",
    },
    {
      id: 5,
      day: "Fri",
      date: "06",
    },
    {
      id: 6,
      day: "Sat",
      date: "07",
    },
  ];
  const time = [
    {
      id: 0,
      time: "10AM - 11AM",
    },
    {
      id: 1,
      time: "11AM - 12AM",
    },
    {
      id: 2,
      time: "12AM - 13AM",
    },
    {
      id: 3,
      time: "13AM - 14AM",
    },
    {
      id: 4,
      time: "14AM - 15AM",
    },
  ];
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [modal, setModal] = useState(false);
  const [appointmentType, setAppointmentType] = useState("");

  const hideModal = () => {
    setModal(false);
  };

  return (
    <ScrollView
      contentContainerStyle={{}}
      style={{
        height: Sizes.height,
        width: "100%",
        flex: 1,
        backgroundColor: "#202020",
      }}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground
        source={{
          uri:
            item && item.image && item.image.original
              ? item.image.original
              : "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        }}
        style={{
          height: Sizes.height - 250,
          width: Sizes.width,
          // alignItems: "center",
          // justifyContent: "center",
        }}
        // imageStyle={{}}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={{
            alignItems: "flex-start",
            padding: Sizes.padding,
          }}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color={Colors.white}
            style={{ alignSelf: "flex-start", paddingLeft: Sizes.padding }}
          />
        </TouchableOpacity>

        <LinearGradient
          colors={["#10101000", "#10101099", "#101010bb", "#101010"]}
          style={{
            width: "100%",
            height: 100,
            position: "absolute",
            bottom: 0,
            // marginTop: -200,
          }}
        ></LinearGradient>
        <View
          style={{
            // justifyContent: "center",
            alignItems: "center",
            // position: "absolute",
            top: 320,
            // left: 135,
            alignSelf: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter-Semi",
              fontSize: 25,
              color: Colors.white,
              // fontWeight: "bold",
              top: 30,
            }}
          >
            Dr. {item.name.replace("Dr. ", "")}
          </Text>
          <Text
            style={{
              fontFamily: "Inter-Semi",
              fontSize: 20,
              color: Colors.white,
              // fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Surgeon
          </Text>
          <Text
            style={{
              fontFamily: "Inter-Semi",
              fontSize: 20,
              color: Colors.white,
              // fontWeight: "bold",
            }}
          >
            Patients <Text style={{ color: Colors.yellow }}>50 +</Text>
          </Text>

          <Text
            style={{
              fontFamily: "Inter-Semi",
              fontSize: 20,
              color: Colors.white,
              // fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Age 43
          </Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Entypo name="location-pin" size={22} color="white" />
            <Text
              style={{
                fontFamily: "Inter-Semi",
                fontSize: 20,
                color: Colors.white,
                // fontWeight: "bold",
              }}
            >
              {item && item.country && item.country.name
                ? item.country.name
                : "unknown"}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          // height: Sizes.height - (Sizes.height - 250),
          width: "100%",
          backgroundColor: "#202020",
          marginTop: -15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            paddingLeft: Sizes.padding,
            color: "white",
            fontFamily: "DMSans-Bold",
            // fontWeight: "bold",
            // padding: Sizes.padding + 10,
            marginTop: Sizes.margin + 5,
            padding: Sizes.padding,
            fontSize: 20,
          }}
        >
          Select Date
        </Text>
        <FlatList
          style={{ height: 100 }}
          data={days}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedDate(item.id);
                }}
                style={{
                  height: 80,
                  width: Sizes.width / 4 - 30,
                  margin: 10,
                  marginBottom: 0,
                  // marginBottom: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  backgroundColor:
                    selectedDate === item.id ? Colors.primary : "#2f2f2f",
                  elevation: selectedDate === item.id ? 5 : 0,
                }}
              >
                <Text
                  style={{
                    color: selectedDate === item.id ? Colors.white : "#8f8f8f",

                    fontFamily: "Inter-Semi",
                    fontSize: 20,
                  }}
                >
                  {item.day}
                </Text>
                <Text
                  style={{
                    color: selectedDate === item.id ? Colors.white : "#8f8f8f",
                    marginTop: 3,
                    fontSize: 30,
                    fontFamily: "Inter-Semi",
                  }}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <Text
          style={{
            color: "white",
            fontFamily: "DMSans-Bold",
            fontSize: 20,
            paddingLeft: Sizes.padding,
            // marginBottom: 30,
            // backgroundColor: "red",
          }}
        >
          Select Schedule Time
        </Text>

        <FlatList
          style={{
            height: 70,
            // backgroundColor: "yellow",
            marginTop: 5,
          }}
          data={time}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => {
            item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedTime(item.id);
                }}
                style={{
                  height: 40,
                  width: 100,
                  backgroundColor:
                    selectedTime === item.id ? Colors.yellow : "#2f2f2f",
                  margin: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  // marginBottom: 30,
                }}
              >
                <Text
                  style={{
                    color: selectedTime === item.id ? "black" : "white",
                    fontFamily: "DMSans-Bold",
                  }}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}
          style={{
            height: 50,
            width: Sizes.width - 30,
            backgroundColor: Colors.primary,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "DMSans-Bold",
              color: Colors.white,
            }}
          >
            Book Appointment
            {appointmentType === "Video"
              ? "  (Video)"
              : appointmentType === "Chat"
              ? "  (Chat)"
              : null}
          </Text>
        </TouchableOpacity>

        <Portal>
          <Modal
            visible={modal}
            onDismiss={hideModal}
            contentContainerStyle={{
              height: 300,
              width: Sizes.width - 20,
              alignSelf: "center",
              backgroundColor: "#2f2f2f",
              borderRadius: 20,
            }}
          >
            <CounsellorDetailModal
              appointmentType={appointmentType}
              setAppointmentType={setAppointmentType}
              hideModal={hideModal}
            />
          </Modal>
        </Portal>
      </View>
    </ScrollView>
  );
};

export default CounsellorDetail;
const style = StyleSheet.create({});
