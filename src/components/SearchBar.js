import React from 'react';
import {Text,View,StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchScreen = () => {
    return <View style={localStyles.backgroundStyle}>
        <Feather name="search" style={localStyles.iconStyle}/>
        <TextInput placeholder="Search" style={localStyles.textInputStyle}></TextInput>
    </View>
}

const localStyles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginHorizontal: 10,
        height: 45,
        backgroundColor: "#F0EEEE",
        flexDirection: 'row'
    },
    iconStyle: {
        marginHorizontal: 10,
        fontSize: 30,
        alignSelf: 'center'
    },
    textInputStyle: {
        flex :1,
        fontSize: 18,
    }
})

export default SearchScreen