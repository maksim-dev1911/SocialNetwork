import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserMessageType } from '../../types/types';

type initialStateType = {
  usersMessages: UserMessageType[];
};

const initialState: initialStateType = {
  usersMessages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getUserMessage: (state, action: PayloadAction<UserMessageType[]>) => {
      state.usersMessages.push(...action.payload);
    },
    clearMessages: (state) => {
      state.usersMessages = [];
    },
  },
});

export const { getUserMessage, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;
