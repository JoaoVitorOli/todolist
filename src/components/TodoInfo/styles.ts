import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  todoInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
    paddingHorizontal: 24
  },

  info: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },

  txtCreated: {
    color: theme.colors.blue,
    fontWeight: '700',
  },

  txtFinished: {
    color: theme.colors.purple,
    fontWeight: '700'
  },

  numberContainer: {
    color: theme.colors.gray100,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: theme.colors.gray400,
    borderRadius: 100,
  },

  number: {
    color: theme.colors.gray100,
    fontWeight: '700'
  },
});