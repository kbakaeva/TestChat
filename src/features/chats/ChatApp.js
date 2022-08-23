import React from "react";
import { View, StyleSheet } from "react-native";
import { ChatList } from "./ChatList";
import { AddChat } from "./AddChat";

export const ChatApp = () => {
  return (
    <View style={styles.container}>
      <ChatList />
      <AddChat />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: "center",
    backgroundColor: '#82B7FF'
  },
});
