import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import store from './src/redux/store';
import CounterApp from './src/components/CounterApp';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <StatusBar style="light" />
        <CounterApp/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    color: 'white'
  },
  
  app:{
    flex: 1,  
    backgroundColor: '#1E1E1E',
  },
});
