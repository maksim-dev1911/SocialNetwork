import { RootState } from '../index';

export const usersMessagesSelector = (state: RootState) => state.chat.usersMessages;
