import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors, Sizes } from "../Constants/Constants";
import axios from "axios";

const ArticleComponent = ({
  item,
  navigation,
  selectedArticle,
  setSelectedArticle,
}) => {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedArticle(item.id);
      }}
      style={{
        backgroundColor: Colors.backgroundColor,
        marginBottom: Sizes.margin,
        elevation: 10,
        marginTop: Sizes.margin + 20,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.post}>
          <Image
            source={{ uri: item.cover_image }}
            style={{ height: 50, width: 50, borderRadius: 50 }}
            resizeMode="cover"
          />
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontFamily: "Bold-Text", color: "white" }}>
              {item.user.name}
            </Text>
            <Text
              style={{
                fontFamily: "Regular-Text",
                color: Colors.primary,
                fontSize: 12,
              }}
            >
              {item.user.twitter_username}
            </Text>
          </View>
        </View>

        <Text
          style={{
            paddingRight: Sizes.padding,
            fontFamily: "Regular-Text",
            color: Colors.white,
          }}
        >
          {`${item.published_at.slice(8, 10)}-${item.published_at.slice(
            5,
            7
          )}-${item.published_at.slice(0, 4)}`}
        </Text>
      </View>

      <Image
        source={{ uri: item.cover_image }}
        style={{ width: width, height: width / 2 }}
        resizeMode="contain"
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              setLiked(!liked);
            }}
          >
            {liked === true ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <AntDesign name="hearto" size={24} color="white" />
            )}
          </TouchableOpacity>
          <Text
            style={{ marginHorizontal: 5, color: Colors.white, fontSize: 10 }}
          >
            {liked === true
              ? item.positive_reactions_count + 1
              : item.positive_reactions_count}
          </Text>
          <MaterialIcons name="messenger-outline" size={24} color="white" />
          <Text
            style={{ marginHorizontal: 5, color: Colors.white, fontSize: 10 }}
          >
            {item.comments_count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setBookmark(!bookmark);
          }}
        >
          {bookmark === true ? (
            <FontAwesome name="bookmark" size={24} color="white" />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "Bold-Text",
            color: "white",
            paddingLeft: Sizes.padding - 5,
            paddingVertical: Sizes.padding,
          }}
        >
          {item.title}
        </Text>
        {selectedArticle === item.id ? (
          <Text
            style={{
              fontFamily: "Bold-Text",
              color: "white",
              paddingLeft: Sizes.padding - 5,
            }}
          >
            {item.description}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ArticleDetails", item);
        }}
      >
        <Text
          style={{
            fontFamily: "Bold-Text",
            color: Colors.primary,
            paddingLeft: Sizes.padding - 5,
          }}
        >
          Click here
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ArticleComponent;

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
  },
});
