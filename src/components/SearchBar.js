import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  //term: search term state value, onTermChange: callback for communicating text change

  return (
    <View style={localStyles.backgroundStyle}>
      <Feather name="search" style={localStyles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={localStyles.textInputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)} // call function directly
        onEndEditing={onTermSubmit} // call function reference
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  backgroundStyle: {
    height: 45,
    backgroundColor: "#F0EEEE",
    flexDirection: "row"
  },
  iconStyle: {
    marginHorizontal: 10,
    fontSize: 30,
    alignSelf: "center"
  },
  textInputStyle: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;
