import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";

import zomato from "../api/zomato";

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState();
  const id = navigation.getParam("id");
  // console.log(id);

  const getResult = async id => {
    const response = await zomato.get(`/restaurant?res_id=${id}`);
    let photos = [];
    response.data.photos.forEach(element => {
      photos.push(element.photo);
    });
    setResult(photos);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  // console.log(JSON.stringify(result));

  return (
    <View style={localStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result}
        contentContainerStyle={localStyles.list}
        renderItem={({ item }) => {
          return (
            <Image style={localStyles.imageStyle} source={{ uri: item.url }} />
          );
        }}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => {
          return <Text style={{ textAlign: "center" }}>No photos</Text>;
        }}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",

    // flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 10
    // position: "relative"
  },
  list: {
    // flex: 1
    // alignItems: "center"
    // justifyContent: "center",
    // alignItems: "center",
    // // flexDirection: "column",
    // marginVertical: 10,
    // marginHorizontal: 10,
    // position: "relative"
  },
  imageStyle: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0
    // flex: 1,
    height: 200,
    width: 325,
    margin: 10
    // borderRadius: 6
  }
});

export default ResultShowScreen;
