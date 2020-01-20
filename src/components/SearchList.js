import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const SearchList = ({ title, results }) => {
  return (
    <View>
      <Text style={localStyles.titleStyle}>{title}</Text>
      <Text>Found {results.length} results.</Text>
      <FlatList
        horizontal
        data={results}
        renderItem={({ item }) => {
          return (
            <View style={localStyles.boxStyle}>
              <Image
                style={{ height: 120, width: 180 }}
                source={{ uri: item.restaurant.thumb }}
              />
              <Text>{item.restaurant.name}</Text>
              <Text>{item.restaurant.user_rating.aggregate_rating} Rating</Text>
            </View>
          );
        }}
        keyExtractor={item => item.restaurant.id}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  titleStyle: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  boxStyle: {
    flexDirection: "column"
  }
});

export default SearchList;
