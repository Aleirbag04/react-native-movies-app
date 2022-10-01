import {Center, Container, Box, Button, Text, HStack, Icon}  from 'native-base';
import Selector from '../forms/Selector';
import {useState, useEffect} from 'react';
import {getData, getSearch} from '../../services/api';
import Loading from '../layout/Spinner';
import ContentList from '../lists/ContentList';
import {Ionicons} from '@expo/vector-icons';
import AlertMessage from '../layout/AlertMessage';


const ListContainer = ({navigation, options,page, query})=> {
 const [isLoading, setIsLoading] = useState(false);
 const [option, setOption] = useState(options[0].value);
 const [category, setCategory] = useState(page);
 const [data, setData] = useState([]);
 const [label, setLabel] = useState('Select option');
 const [alert, setAlert] = useState(false);
// const {options, page, query} = props;


    const searchButton = () => {
    if (query){
        setAlert(false);
        setIsLoading(true);
        getSearch(category, option, query)
        .then(data => {
            setData(data);
            setIsLoading(false);
        })
        .catch(error => console.log(error));
    }
    else {
        setAlert(true);

    }

    }

    const fetchData = () => {
        setIsLoading(true);
        console.log('fetching data');
        if (category === 'search') {
        setLabel('Choose search type');
        }
        else {
            getData(category, option)
            .then(response => {
                setData(response);
        })
        .then(() => setIsLoading(false))
        .catch(error => console.log(error));

        }
    }

    const handleSelect = (option) => {

           setOption(option);

    }

    useEffect(() => {
        if(category != 'search')
        fetchData();
    },[option, ' ']);


 return (


        <Box w='100%' p='1'>
          <Center>



                {page === 'search' ?
                (
                <HStack space={4} p={3}  justifyContent='space-around'>

                 <Selector options={options} onSelect={handleSelect} label={label} />
                    <Button
                    size='sm'
                    height='10'
                    width='78'
                    mt={7}
                    backgroundColor='#86198f'
                    onPress={searchButton}
                    leftIcon=
                        {<Icon as={Ionicons}
                        name="search"
                        size="sm"
                        color="white"
                        />}
                    >
                    Start
                </Button>


                </HStack>


                  ) :
                  (
                   <Box alignSelf="center" p='3'>
                  <Selector options={options} onSelect={handleSelect} label={label} />
                    </Box>
                    )}

          </Center>
                          <Box>
                              {alert ? <AlertMessage message='Please enter a search term'/> : null}
                          </Box>
            <Box w='100%' h='100%'>
                {isLoading ? (
                <Loading/> ) : (
                        <ContentList data={data} page={page} category={category} navigation={navigation}/>
                )}
            </Box>
        </Box>


    );
}

export default ListContainer;