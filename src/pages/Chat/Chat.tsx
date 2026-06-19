import Box from '@mui/material/Box';
import React, { useEffect, useRef } from 'react';
import { Messages, SendMessageForm } from '../../components/Chat';
import Typography from '@mui/material/Typography';
import { userMessage } from '../../store/chat/chat.thunks';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { usersMessagesSelector } from '../../store/chat/chat.selectors';
import { connectToWs } from '../../api';
import { sx } from '../../components/Chat/Messages.style';

const Chat = () => {
  const usersMessages = useAppSelector(usersMessagesSelector);

  const dispatch = useAppDispatch();

  const wsRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [usersMessages]);

  useEffect(() => {
    wsRef.current = connectToWs();

    wsRef.current.addEventListener('message', (e: MessageEvent) => {

      dispatch(userMessage(JSON.parse(e.data)));
    });
  }, []);

  const handleSubmit = (sendMessage: string) => {
    wsRef.current.send(Object.values(sendMessage).toString());
  };

  return (
    <Box sx={sx.messagesWrapper}>
      <Typography mb={5} variant='h5'>
        Common Chat
      </Typography>
      <Messages usersMessages={usersMessages} messagesEndRef={messagesEndRef} />
      <SendMessageForm onSubmit={handleSubmit} />
    </Box>
  );
};

export default React.memo(Chat);
