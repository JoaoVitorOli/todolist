import { FlatList } from 'react-native';

import { useStoreState } from '../../store/hooks';
import Item from './Item';
import Empty from './Empty';
import { styles } from './styles';

export default function TodoList() {
  const todos = useStoreState(state => state.todos);

  return (
    <FlatList
      data={todos}
      renderItem={(data) => (
        <Item 
          id={data.item.id}
          isFinished={data.item.isFinished}
          text={data.item.title}
        />
      )}
      keyExtractor={item => item.id}
      ListEmptyComponent={<Empty />}
      style={styles.list}
    />
  );
}
