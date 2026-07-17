import React, { RefObject } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { Message } from './index';
import { UserMessageType } from '../../types/types';
import { sx } from './Messages.style';

type PropsType = {
  usersMessages: UserMessageType[];
  messagesEndRef: RefObject<HTMLDivElement>;
  currentUserId?: number;
};

const Messages: React.FC<PropsType> = ({ usersMessages, messagesEndRef, currentUserId }) => {
  if (!usersMessages.length) {
    return (
      <Box sx={sx.messagesArea}>
        <Box sx={sx.emptyState}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '20px',
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'rgba(88, 80, 236, 0.1)',
              color: 'primary.main',
              mb: 2,
            }}
          >
            <ForumOutlinedIcon fontSize="large" />
          </Box>
          <Typography fontWeight={700} color="text.primary" fontSize={18} mb={0.75}>
            Start the conversation
          </Typography>
          <Typography fontSize={14} maxWidth={320}>
            Say hello to the community. New messages will appear here in real time.
          </Typography>
        </Box>
        <div ref={messagesEndRef} />
      </Box>
    );
  }

  return (
    <Box sx={sx.messagesArea}>
      {usersMessages.map((u, index) => {
        const prev = usersMessages[index - 1];
        const isOwn = currentUserId != null && u.userId === currentUserId;
        const isGrouped = prev?.userId === u.userId;

        return (
          <Box
            key={`${u.userId}-${index}`}
            sx={{
              mb: 0.75,
              mt: isGrouped ? 0.35 : 1.5,
              '&:last-child': { mb: 0 },
            }}
          >
            <Message userMessage={u} isGrouped={isGrouped} isOwn={isOwn} />
          </Box>
        );
      })}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default React.memo(Messages);
