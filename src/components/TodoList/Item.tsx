import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Image } from 'expo-image';

import { theme } from '../../styles/theme';
import { useStoreActions } from '../../store/hooks';

interface TasksItemProps {
  text: string;
  isFinished: boolean;
  id: string;
}

export default function Item({
  id,
  isFinished,
  text
}: TasksItemProps) {
  const checkTodo = useStoreActions(actions => actions.checkTodo);
  const removeTodo = useStoreActions(actions => actions.removeTodo);

  return (
    <TouchableOpacity 
      onPress={() => checkTodo(id)}
      style={{
        ...styles.item,
        borderColor: isFinished ? theme.colors.gray500 : theme.colors.gray400
      }}
      activeOpacity={0.8}
    >
      <Checkbox 
        style={styles.checkbox} 
        disabled 
        value={isFinished}
        color={theme.colors.blue}
      />

      <Text 
        style={{
          ...styles.text,
          color: isFinished ? theme.colors.gray300 : theme.colors.gray100,
          textDecorationStyle: isFinished ? 'dashed' : undefined,
          textDecorationColor: isFinished ?  theme.colors.gray300 : undefined,
          textDecorationLine: isFinished ? 'line-through': undefined,
        }}
      >
        {text}
      </Text>

      <TouchableOpacity 
        style={styles.buttonTrash}
        onPress={() => removeTodo(id)}
      >
        <Image 
          source={require('../../assets/trash.svg')}
          style={styles.trashIcon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: theme.colors.gray500,
    marginBottom: 8
  },

  checkbox: {
    borderRadius: 50,
  },

  trashIcon: {
    width: 12.48,
    height: 14
  },

  buttonTrash: {
    padding: 10,
    borderRadius: 6
  },

  text: {
    flex: 1,
  }
});
