import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import rootStore from './src/store/rootStore'
import SignIn from './src/screens/SignIn';
import { loadProfile } from './src/store/profileSlice';


rootStore.dispatch(loadProfile())

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Provider store={rootStore}>
        <SignIn/>
      </Provider>
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
