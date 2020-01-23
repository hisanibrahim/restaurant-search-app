import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import ResultBox from "../components/ResultBox";

const SearchList = ({ title, results }) => {
  return (
    <View>
      <Text style={localStyles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return item.restaurant.thumb === "" ? null : (
            <ResultBox result={item} />
          );
        }}
        keyExtractor={item => item.restaurant.id}
        ListEmptyComponent={() => {
          return <Text style={{ marginLeft: 12 }}>0 results found.</Text>;
        }}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  titleStyle: {
    marginHorizontal: 12,
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  }
});

export default SearchList;
