import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SearchList = ({ title, results }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>Found {results.length} results.</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({});

export default SearchList;
