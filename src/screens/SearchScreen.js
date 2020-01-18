import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useSearchResults from "../hooks/useSearchResults";
import SearchList from "../components/SearchList";

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
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
      <SearchList title="Cheap" results={filterResultsByPrice(1)} />
      <SearchList title="Avergae" results={filterResultsByPrice(2)} />
      <SearchList title="Expensive" results={filterResultsByPrice(3)} />
    </View>
  );
};

export default SearchScreen;
