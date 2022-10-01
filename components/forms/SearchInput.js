
import { Box, Center, Select, Input, Text } from "native-base";

const SearchInput = props => {

    const {onChangeInput} = props;

    return (
    <Center>
        <Box maxW='300' my={3} mb={-1}>
                <Text fontSize="sm">Search Movie/TV Show Name
                <Text fontSize="xs" _light={{color: "red.500",}}> *</Text>
                </Text>
                <Input
                    placeholder="i.e. The Matrix, Friends, etc."
                    variant="filled"
                    backgroundColor='#fff'
                    accessibilityLabel="Search for a movie, tv show"
                    px={2}
                    width="100%"
                    my={1}
                    mx="auto"
                    label="Search"
                    onChangeText={query => onChangeInput(query)}
                   />

        </Box>
    </Center>
    );
}

export default SearchInput;