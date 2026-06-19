import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserMessageType } from '../../types/types';
import { getUserMessage } from './chatSlice';

export const userMessage = createAsyncThunk(
  'userMessage',
  async (usersMessages: UserMessageType[], { dispatch }) => {
    dispatch(getUserMessage(usersMessages));
  }
);
