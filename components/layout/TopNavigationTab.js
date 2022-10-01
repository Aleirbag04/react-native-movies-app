import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const TopNavigationTab = props =>{
    const {movies, search, shows} = props;

    const onPress = () => {
     const event = navigation.emit({
         type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
     });
    }
    return (
        <Tab.Navigator
        initialRouteName="Movies"
        screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: '#a21caf' },
            tabBarIndicatorStyle: { backgroundColor: '#fae8ff' },


        }}

        >
            <Tab.Screen
                name="movie"
                component={movies}
            />
            <Tab.Screen
                name="search"
                component={search}
            />
            <Tab.Screen
                name="tv"
                component={shows}
            />

        </Tab.Navigator>
    );
}

export default TopNavigationTab;