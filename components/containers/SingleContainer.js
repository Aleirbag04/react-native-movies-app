import {Container, Box, Image, Text, HStack} from 'native-base';


const SingleContent = props=> {
    const {data,category, navigation} = props;
    return (

     <Box alignItems="center" mt={5}>
            <Text
            fontSize="2xl"
            fontWeight="bold"
            color="coolGray.800"
            textAlign="center"
            >
            {data.title ? data.title : data.name}
            </Text>
            <Box maxW="80" rounded="lg" overflow="hidden" my={2} mx="auto">
                <Image
                    source={{uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`}}
                    alt={data.title ? data.title : data.name}
                    width={250}
                    height={250}

                />
            </Box>
            <Box
            overflow="hidden"
            w="90%"
            >
                <Text
                fontSize="md"
                fontWeight="light"
                color="coolGray.800"

                >
                {data.overview}
                </Text>
            </Box>
            <HStack space={2} justifyContent="center" mt={2}>
                <Text fontSize="sm"
                fontWeight="light"
                fontStyle="italic"
                >Popularity: {data.popularity}</Text>
                <Text> | </Text>
                <Text fontSize="sm"
                fontWeight="light"
                fontStyle="italic"
                >Release Date: {data.release_date}</Text>
            </HStack>

     </Box>

    );
}

export default SingleContent;