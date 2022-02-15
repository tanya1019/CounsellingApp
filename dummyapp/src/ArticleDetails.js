import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import axios from "axios";
import { Colors, Sizes } from "../Constants/Constants";

const ArticleDetails = (props) => {
  const item = props.route.params;
  const width = Dimensions.get("window").width;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = () => {
      axios.get("https://dev.to/api/comments?a_id=270180").then((response) => {
        setComments(response.data);
        // console.log(response.data);
      });
    };
    fetchComments();
  }, []);

  return (
    <View style={{ backgroundColor: Colors.backgroundColor }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text
          style={{
            color: Colors.white,
            fontFamily: "Header-Text",
          }}
        >
          Daily Feed
        </Text>
        <TouchableOpacity>
          <Feather name="search" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ backgroundColor: Colors.backgroundColor }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            marginBottom: 10,
            backgroundColor: Colors.backgroundColor,
          }}
        >
          <View style={styles.post}>
            <Image
              source={{ uri: item.cover_image }}
              style={{ height: 50, width: 50, borderRadius: 30 }}
            />
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ color: Colors.white, fontFamily: "Bold-Text" }}>
                {item.user.name}
              </Text>
              <Text
                style={{
                  color: Colors.primary,
                  fontFamily: "Regular-Text",
                  fontSize: 10,
                }}
              >
                {item.user.twitter_username}
              </Text>
            </View>
          </View>

          <Text
            style={{
              paddingRight: 30,
              color: Colors.white,
              fontFamily: "Regular-Text",
            }}
          >
            {`${item.published_at.slice(8, 10)}-${item.published_at.slice(
              5,
              7
            )}-${item.published_at.slice(0, 4)}`}
          </Text>
        </View>

        <Text
          style={{
            color: Colors.white,
            fontFamily: "Medium-Text",
            paddingLeft: 10,
          }}
        >
          {item.title}
        </Text>
        <Image
          source={{ uri: item.cover_image }}
          style={{ height: width / 2, width: width }}
          resizeMode="cover"
        />
        <Text
          style={{
            color: Colors.white,
            fontFamily: "Bold-Text",
            paddingLeft: 10,
          }}
        >
          {item.description}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: Colors.primary,
              fontFamily: "Regular-Text",
              paddingLeft: 10,
            }}
          >
            Click here to view full Article
          </Text>
        </TouchableOpacity>

        {comments.map((item) => {
          return (
            <View
              key={item.id_code}
              style={{
                backgroundColor: Colors.backgroundColor,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: Colors.white, fontFamily: "Regular-Text" }}>
                {item.body_html.replace(/(<([^>]+)>)/gi, "")}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ArticleDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#101010",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    height: 50,
    alignItems: "center",
    marginBottom: 5,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  post: {
    flexDirection: "row",
  },
});
