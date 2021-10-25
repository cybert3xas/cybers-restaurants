import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

/**
 * This component is a search bar that allows users to input text. The text 
 * that is inputed by the user is used to make an API call. 
 * 
 * @param term string, that is used to search the Yelp API
 * @param onTermChange function, callback function used by the parent to update the text
 * @param onTermSubmit function, callback function used to start the API call
*/
const SearchBar = ( {term, onTermChange, onTermSubmit} ) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#989898',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;