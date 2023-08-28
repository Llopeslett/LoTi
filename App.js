import { StatusBar } from 'expo-status-bar';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import TelaLogin from './src/TelaLogin';

export default function App() {
  return (
    <View style={{height: '00%'}}>
      <TelaLogin></TelaLogin>
    </View>
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
