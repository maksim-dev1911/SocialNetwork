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
      state.usersMessages = [...state.usersMessages, ...action.payload];
    },
  },
});

export const { getUserMessage } = chatSlice.actions;

export default chatSlice.reducer;
