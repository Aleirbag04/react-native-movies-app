import {View} from 'react-native';
import {getOne} from '../../services/api';
import {useEffect, useState} from 'react';
import SingleContainer from '../containers/SingleContainer';


const SingleViewScreen = ({ navigation, route }) => {
const { id, category, title } = route.params;
const [data, setData] = useState({});

    const fetchDetails =() => {

        getOne(category, id).then((response) => {
            setData(response);
        });


    }
    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <View>
            <SingleContainer data={data} navigation={navigation} title={title}/>
         </View>

    );
}

export default SingleViewScreen;