import React, { RefObject } from 'react';
import Box from '@mui/material/Box';
import { Message } from './index';
import { UserMessageType } from '../../types/types';
import { sx } from './Messages.style';

type PropsType = {
  usersMessages: UserMessageType[];
  messagesEndRef: RefObject<HTMLDivElement>;
};

const Messages: React.FC<PropsType> = ({ usersMessages, messagesEndRef }) => {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        overflowY: 'auto',
        height: { xs: 'min(580px, calc(100vh - 280px))', sm: 'min(580px, calc(100vh - 240px))' },
        minHeight: 240,
      }}
    >
      {usersMessages.map((u, index) => {
        const isGrouped = usersMessages[index - 1]?.userId === u.userId;

        return (
          <Box key={index} sx={sx.messageWrapper}>
            <Message userMessage={u} isGrouped={isGrouped} />
            <div ref={messagesEndRef} />
          </Box>
        );
      })}
    </Box>
  );
};

export default React.memo(Messages);
