import {Badge, View} from 'native-base';

const AlertMessage = props => {
    const {message} = props;

    return (
        <View>
            <Badge
                bg="red.500"
                _text={{color: 'white'}}
                alignSelf="center"
                borderRadius={5}
                p={5}
                mt={4}


            >
                {message}
            </Badge>
        </View>
    );
}

export default AlertMessage;