import {Spinner, Heading, HStack} from 'native-base';

const Loading = () => {
  return <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>;
};

/*Native Base Spinner*/
export default Loading;