import Box from '@mui/material/Box';
import React, { useEffect, useRef } from 'react';
import { Messages, SendMessageForm } from '../../components/Chat';
import Typography from '@mui/material/Typography';
import { userMessage } from '../../store/chat/chat.thunks';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { usersMessagesSelector } from '../../store/chat/chat.selectors';
import { connectToWs } from '../../api';
import { sx } from '../../components/Chat/Messages.style';
import { FormValues } from '../../components/Chat/SendMessageForm';

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

  const handleSubmit = (values: FormValues) => {
    wsRef.current.send(Object.values(values).toString());
  };

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={800}
        sx={{
          letterSpacing: '-0.04em',
          color: 'text.primary',
        }}
      >
        Common chat
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 0.5,
          color: 'text.secondary',
          fontWeight: 500,
        }}
      >
        Connect with community members
      </Typography>
      <Box sx={sx.messagesWrapper}>
        <Messages usersMessages={usersMessages} messagesEndRef={messagesEndRef} />
        <SendMessageForm onSubmit={handleSubmit} />
      </Box>
    </Box>
  );
};

export default React.memo(Chat);
