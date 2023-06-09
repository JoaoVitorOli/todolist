import { View, Text } from 'react-native';

import { useStoreState } from '../../store/hooks';
import { styles } from './styles';

export default function TodoInfo() {
  const todos = useStoreState(state => state.todos);
  const todosLength = todos.length;
  const todosCheckedLenght = todos.filter(todo => todo.isFinished).length;

  return (
    <View style={styles.todoInfos}>
      <View style={styles.info}>
        <Text style={styles.txtCreated}>Criadas</Text>

        <View style={styles.numberContainer}>
          <Text style={styles.number}>{todosLength}</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.txtFinished}>Concluídas</Text>

        <View style={styles.numberContainer}>
          <Text style={styles.number}>{todosCheckedLenght}</Text>
        </View>
      </View>
    </View>
  );
}
