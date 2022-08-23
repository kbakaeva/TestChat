import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ChatApp } from './src/features/chats/ChatApp';

export default function App() {
  return (
    <Provider store={store}>
      <ChatApp />
    </Provider>
  );
}
