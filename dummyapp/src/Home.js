import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
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
import ArticleComponent from "../Components/ArticleComponent";
import { Header } from "../Components/Header";
const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get("https://dev.to/api/articles");

      setArticles(response.data);
      console.log(props.navigation);
    };
    fetchArticles();
  }, []);

  return (
    <View style={styles.container}>
      <Header>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="menu"
              size={20}
              color={Colors.white}
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
          <Text style={{ color: Colors.white, fontFamily: "Header-Text" }}>
            Daily Feed
          </Text>
          <TouchableOpacity>
            <FontAwesome
              name="search"
              size={20}
              color={Colors.white}
              style={{ paddingRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </Header>

      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ArticleComponent
              navigation={props.navigation}
              item={item}
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Sizes.padding + 40,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    marginTop: 30,
  },
});
