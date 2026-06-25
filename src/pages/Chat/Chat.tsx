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
import { clearMessages } from '../../store/chat/chatSlice';
import PageLayout from '../../components/Common/PageLayout/PageLayout';

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
    const ws = connectToWs();

    const handleMessage = (e: MessageEvent) => {
      const data = JSON.parse(e.data);

      console.log('FROM WS', data.length);
      dispatch(userMessage(data));
    };

    ws.addEventListener('message', handleMessage);

    wsRef.current = ws;

    return () => {
      ws.removeEventListener('message', handleMessage);
      ws.close();

      dispatch(clearMessages());
    };
  }, [dispatch]);

  const handleSubmit = (values: FormValues) => {
    wsRef.current.send(Object.values(values).toString());
  };

  return (
    <Box>
      <PageLayout title="Common chat" description="Connect with community members">
        <Box sx={sx.messagesWrapper}>
          <Messages usersMessages={usersMessages} messagesEndRef={messagesEndRef} />
          <SendMessageForm onSubmit={handleSubmit} />
        </Box>
      </PageLayout>
    </Box>
  );
};

export default React.memo(Chat);
