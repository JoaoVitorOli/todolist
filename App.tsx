import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import Home from './src/screens/Home';
import { theme } from './src/styles/theme';
import { StoreProvider } from 'easy-peasy';
import { todoStore } from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StoreProvider store={todoStore}>
        <Home />
        <StatusBar style="light" backgroundColor={theme.colors.gray700} />
      </StoreProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: theme.colors.gray600
  },
});
