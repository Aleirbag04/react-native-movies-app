import {View, Text, Box, Center, Container} from 'react-native';
import ListContainer from '../containers/ListContainer';
import {useIsFocused} from '@react-navigation/native';

import {useState} from 'react';
import SearchInput from '../forms/SearchInput';
//const options = [ "movie", "multi", "tv"];

const options =[
    { label: "Movie", value: "movie" },
    { label: "Multi", value: "multi" },
    { label: "TV", value: "tv" }
]

const SearchResultsScreen = ({navigation, route}) => {
 const [query, setQuery] = useState('');
    const isFocused = useIsFocused();

    const handleInput = (query) => {
        setQuery(query);
    }
    return (
        <View>

        <SearchInput onChangeInput={handleInput}/>
            {isFocused && <ListContainer options={options} page={route.name}  query={query} navigation={navigation}/>}

        </View>
    );
}

export default SearchResultsScreen;