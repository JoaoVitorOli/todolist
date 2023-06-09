import { TouchableOpacity, StyleSheet, TextInput, View } from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
import uuid from 'react-native-uuid';

import { theme } from '../styles/theme';
import { useStoreActions } from '../store/hooks';

export default function Input() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const addTodo = useStoreActions(actions => actions.addTodo); 

  function handleSubmitTodo() {
    const valueFiltered = value.trim();

    if (valueFiltered) {
      addTodo({
        id: String(uuid.v4()),
        title: value,
        isFinished: false
      });

      setValue('');
    }
  }

  const styles = StyleSheet.create({
    input: {
      backgroundColor: theme.colors.gray500,
      padding: 16,
      borderRadius: 6,
      color: theme.colors.gray100,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: isFocused ? theme.colors.purpleDark : 'transparent',
      height: 52,
      flex: 1
    },

    content: {
      flexDirection: 'row',
      gap: 8,
      paddingHorizontal: 24,
      marginTop: -30
    },

    button: {
      backgroundColor: theme.colors.blueDark,
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      borderRadius: 6,
    },

    icon: {
      width: 16,
      height: 16,
    }
  });

  return (
    <>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors.gray300}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7}
          onPress={handleSubmitTodo}
        >
          <Image 
            style={styles.icon}
            source={require('../assets/plus.svg')}
            contentFit="cover"
            transition={1000}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
