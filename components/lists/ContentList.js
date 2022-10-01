import {FlatList} from 'native-base';
import Card from '../listItems/Card';

const ContentList = ({data, category,navigation})=> {
//    const {data,category, navigation} = props;
    return (
        <FlatList
            data={data}


            renderItem={({item}) => (


                <Card
                    title={item.title ? item.title : item.name}
                    image={item.poster_path}
                    popularity={item.popularity}
                    release_date={item.release_date}
                    id={item.id}
                    category={category === 'search' ? item.media_type : category}
                    navigation={navigation}

                />
            )}
            keyExtractor={item => item.id}
        />
    );
}

export default ContentList;