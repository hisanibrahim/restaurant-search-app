import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const ResultBox = ({ result }) => {
  return (
    <View style={localStyles.container}>
      <Image
        style={localStyles.imageStyle}
        source={{ uri: result.restaurant.thumb }}
      />
      <Text style={localStyles.name}>{result.restaurant.name}</Text>
      <Text>
        {result.restaurant.user_rating.aggregate_rating} Stars,{" "}
        {result.restaurant.all_reviews_count} Reviews
      </Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  titleStyle: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  name: {
    fontWeight: "bold"
  },
  container: {
    flexDirection: "column",
    marginLeft: 12,
    marginBottom: 5
  },
  imageStyle: {
    height: 125,
    width: 240,
    borderRadius: 6
  }
});

export default ResultBox;
