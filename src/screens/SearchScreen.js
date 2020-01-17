import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import zomato from "../api/zomato";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      console.log("Hi there!");
      setErrorMessage("");
      const response = await zomato.get("/search", {
        params: {
          q: searchTerm // Zomato API parameter for search term
        }
      });
      setResults(response.data.restaurants);
    } catch (err) {
      setErrorMessage("Something went wrong! Please try again.");
    }
  };

  useEffect(() => {
    searchApi("s");
  }, []);

  // adding a empty array '[]' as second parameter run
  // first parameter function only once

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

export default SearchScreen;
