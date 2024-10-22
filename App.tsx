import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer></NavigationContainer>
    </SafeAreaProvider>
  );
}
