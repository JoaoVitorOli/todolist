import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import TodoInfo from '../components/TodoInfo';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <TodoInfo />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
