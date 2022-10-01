import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import AppStack from './components/stacks/AppStack';

export default function App() {
  return (

     <NativeBaseProvider>
        <AppStack />
        <StatusBar style="light" />
      </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
