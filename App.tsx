import { StyleSheet, View } from 'react-native';
import StopWatch from './Screen/Stopwatch';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <StopWatch/>
    </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});