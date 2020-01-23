import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useSearchResults from "../hooks/useSearchResults";
import SearchList from "../components/SearchList";
// import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useSearchResults();
  const filterResultsByPrice = price => {
    // price === "1" || "2" || "3"

    return results.filter(result => {
      return result.restaurant.price_range === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={localStyles.text}>
          {errorMessage ? <Text>{errorMessage}</Text> : null}
          <Text>We have found {results.length} results.</Text>
        </View>
        <SearchList title="Cheap" results={filterResultsByPrice(1)} />
        <SearchList title="Average" results={filterResultsByPrice(2)} />
        <SearchList title="Expensive" results={filterResultsByPrice(3)} />
      </ScrollView>
    </>
  );
};

const localStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  text: {
    marginHorizontal: 12
  }
});

export default SearchScreen;
