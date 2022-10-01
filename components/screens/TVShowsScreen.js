import {View, Text} from 'react-native';
import ListContainer from '../containers/ListContainer';
import {useIsFocused} from '@react-navigation/native';

//const options = ["airing today","on the air","popular", "top rated"];

const options =[
    { label: "Airing Today", value: "airing_today" },
    { label: "On The Air", value: "on_the_air" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" }
]

const TVShowsScreen = ({navigation, route}) => {
    const isFocused = useIsFocused();
    return (
        <View>
            {isFocused && <ListContainer options={options} page={route.name}/>}
        </View>
    );
}

export default TVShowsScreen;