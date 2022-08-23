import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addChat } from './chatSlice';

export const AddChat = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(addChat(text));
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Chat" value={text} onChangeText={setText} style={styles.input} />
      <Button title="Add" onPress={handleSubmit} style='addButton' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BCD9FF",
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: 'ghostwhite',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },
  input: {
    width: '80%',
    backgroundColor: 'ghostwhite',
    marginBottom: 8,
    padding: 8,
    height: 40,
    borderRadius: 10
  },
  addButton: {
    width: '20%',
  }
});
