import { createStore, persist } from "easy-peasy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodoStoreProps } from "./model";
import { todo } from "./todos";

export const todoStore = createStore<TodoStoreProps>(
  persist(todo, { 
    allow: ["addTodo", "removeTodo",  "checkTodo", "todos"],
    storage: {
      getItem: async (key) => {
        const value = await AsyncStorage.getItem(key);
        
        return JSON.parse(String(value));
      },
      setItem: (key, value) => {
        AsyncStorage.setItem(key, JSON.stringify(value))
      },
      removeItem: async (key) => {
        await AsyncStorage.removeItem(key);
      },
    }
  })
);