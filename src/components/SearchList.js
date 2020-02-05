import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultBox from "../components/ResultBox";
import { withNavigation } from "react-navigation";

const SearchList = ({ title, results, navigation }) => {
  return !results.length ? null : (
    <View>
      <Text style={localStyles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return item.restaurant.thumb === "" ? null : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultShowScreen", {
                  id: item.restaurant.R.res_id
                })
              }
            >
              <ResultBox result={item} />
            </TouchableOpacity>
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

export default withNavigation(SearchList);
