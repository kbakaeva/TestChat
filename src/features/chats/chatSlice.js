import { createSlice } from '@reduxjs/toolkit';

let nextChatId = 0;

const chatSlice = createSlice({
  name: 'chat',
  initialState: [],
  reducers: {
    addChat(state, action) {
      state.push({
        id: nextChatId++,
        text: action.payload,
        completed: false
      })
    },
    toggleChat(state, action) {
      const chat = state.find(chat => chat.id === action.payload)
      if (chat) {
        chat.completed = !chat.completed
      }
    }
  }
})

export const { addChat, toggleChat } = chatSlice.actions

export default chatSlice.reducer