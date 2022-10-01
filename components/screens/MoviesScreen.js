import {View, Text} from 'react-native';
import ListContainer from '../containers/ListContainer';
import {useIsFocused} from '@react-navigation/native';


//const options = [ "now playing","popular","top rated", "upcoming"];

const options =[
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" }
]

const MoviesScreen = ({navigation, route}) => {
    const isFocused = useIsFocused();

    return (
        <View>
        {isFocused && <ListContainer options={options} page={route.name}/>}
        </View>
    );
}

export default MoviesScreen;