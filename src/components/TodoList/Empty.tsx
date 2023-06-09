import { View, StyleSheet, Text } from 'react-native';
import { Image } from 'expo-image';
import { theme } from '../../styles/theme';

export default function Empty() {
  return (
    <View style={styles.empty}>
      <Image
        source={require('../../assets/clipboard.png')}       
        style={styles.image}
      />

      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    alignItems: 'center',
    paddingTop: 48,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray500,
    borderStyle: 'solid',
    width: '100%'
  },

  image: {
    width: 56,
    height: 56,
    marginBottom: 16
  },

  title: {
    fontSize: 14,
    color: theme.colors.gray300,
    fontWeight: '700',
    lineHeight: 19.6,
    textAlign: 'center'
  },

  subTitle: {
    fontSize: 14,
    color: theme.colors.gray300,
    fontWeight: '400',
    lineHeight: 19.6,
    textAlign: 'center'
  },
});
