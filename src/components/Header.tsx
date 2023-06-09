import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { theme } from '../styles/theme';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/logo.svg')}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: '100%',
    backgroundColor: theme.colors.gray700,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 110,
    height: 32,
  },
});
