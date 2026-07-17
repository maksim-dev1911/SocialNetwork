import Box from '@mui/material/Box';
import React, { useEffect, useRef } from 'react';
import { Messages, SendMessageForm } from '../../components/Chat';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { userMessage } from '../../store/chat/chat.thunks';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { usersMessagesSelector } from '../../store/chat/chat.selectors';
import { connectToWs } from '../../api';
import { sx } from '../../components/Chat/Messages.style';
import { FormValues } from '../../components/Chat/SendMessageForm';
import { clearMessages } from '../../store/chat/chatSlice';
import PageLayout from '../../components/Common/PageLayout/PageLayout';
import { currentUserIdSelector } from '../../store/auth/auth.selectors';
import Stack from '@mui/material/Stack';

const Chat = () => {
  const usersMessages = useAppSelector(usersMessagesSelector);
  const currentUserId = useAppSelector(currentUserIdSelector);

  const dispatch = useAppDispatch();

  const wsRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    <Box sx={sx.page}>
      <PageLayout title="Common chat" description="Connect with community members in real time">
        <Box sx={sx.shell}>
          <Box sx={sx.header}>
            <Avatar sx={sx.headerAvatar}>CC</Avatar>
            <Box flex={1} minWidth={0}>
              <Typography fontWeight={700} fontSize={16} noWrap>
                Community room
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={sx.liveDot} />
                <Typography fontSize={13} color="text.secondary">
                  Live · {usersMessages.length} messages
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Messages
            usersMessages={usersMessages}
            messagesEndRef={messagesEndRef}
            currentUserId={currentUserId}
          />
          <SendMessageForm onSubmit={handleSubmit} />
        </Box>
      </PageLayout>
    </Box>
  );
};

export default React.memo(Chat);
