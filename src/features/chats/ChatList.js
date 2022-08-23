import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export function ChatList() {
  const chat = useSelector((state) => state.chat);

  return (
    <View style={styles.container}>
      {chat.map((chat, index) => (
        <Text style={styles.chatText} key={chat.id}>{`${chat.text}`}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    height: '88%',
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  chatText: {
    margin: 4,
    color: '#E5F0FF',
    fontSize: 16
  },
});
