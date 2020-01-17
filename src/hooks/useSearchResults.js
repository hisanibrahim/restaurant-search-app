import { useState, useEffect } from "react";
import zomato from "../api/zomato";

export default () => {
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
  // first parameter function only runs at initial render

  return [searchApi, results, errorMessage];
};
