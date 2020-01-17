import React, {useState} from 'react';
import {Text,View,StyleSheet,} from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    return <View>
        <SearchBar 
            term={term} 
            onTermChange={newTerm=> setTerm(newTerm)}
            onTermSubmit={()=> console.log("submitted")}
        />
        <Text>Hello: {term}</Text>
    </View>
}

export default SearchScreen