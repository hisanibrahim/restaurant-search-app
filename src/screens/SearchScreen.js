import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import zomato from "../api/zomato";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      setErrorMessage("");
      const response = await zomato.get("/search", {
        params: {
          q: term // Zomato API parameter for search term
        }
      });
      setResults(response.data.restaurants);
      console.log(results.length);
    } catch (err) {
      setErrorMessage("Something went wrong! Please try again.");
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

export default SearchScreen;
