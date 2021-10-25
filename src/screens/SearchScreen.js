import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    //term: search api with this string
    //setTerm: call back function
    const [term, setTerm] = useState('');

    //Response from API is an array, therefore our state is an array
    const [results, setResults] = useState([]); 
    const searchAPI = async () => {
        const response = await yelp.get('/search', {
            //Look into Yelps API for more details
            params: {
                limit: 50,
                term: term,
                location: 'el paso'
            }
        });
        setResults(response.data.businesses); //response from API 
    };

    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={searchAPI}/>
            <Text>We found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;