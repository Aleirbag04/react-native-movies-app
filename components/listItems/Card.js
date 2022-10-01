import {Box, Center, Select, CheckIcon, Text, Button,Image, HStack} from 'native-base';

const Card = props => {
    const {title, image, popularity, release_date, id, category, navigation} = props;


    return (
        <Box
        bg="white"
        shadow={1}
        rounded="lg"
        overflow="hidden"
        w="90%"
        my={2}
        mx="auto">
        <HStack space={2} justifyContent="center">
        <Box p={2} justifyContent="center">
       <Image
        source={{uri: `https://image.tmdb.org/t/p/w500/${image}`}}
        alt={title}
        size="lg"
        resizeMode="cover"


        />
        </Box>
        <Box p={2} w="60%">
            <Text fontSize="md" fontWeight="bold">{title}</Text>
            <Text mt="0.5" fontSize="sm">Popularity: {popularity}</Text>
            <Text mt="0.5" fontSize="sm">Release Date: {release_date}</Text>
            <Button
            onPress={() => navigation.navigate('Details', {id, category, title})}
            variant='ghost'
            >
            More Details
            </Button>
        </Box>
        </HStack>
        </Box>
    );
}

export default Card;