import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MoviesScreen from '../screens/MoviesScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import TVShowsScreen from '../screens/TVShowsScreen';
import TopNavigationTab from '../layout/TopNavigationTab';
import SingleViewScreen from '../screens/SingleViewScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (

  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
        options={{
        title: 'Movies App',
        headerStyle: {
            backgroundColor: '#a21caf',
            alignItems: 'center',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
        }
        }}
        >
        {(props) => <TopNavigationTab {...props} movies={MoviesScreen} search={SearchResultsScreen} shows={TVShowsScreen} />}
        </Stack.Screen>
        <Stack.Screen
            name='Details'
            component={SingleViewScreen}
        />
      </Stack.Navigator>
  </NavigationContainer>

 );

 export default AppStack;

