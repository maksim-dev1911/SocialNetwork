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
    <Box sx={{ borderRadius: '10px', overflowY: 'auto', height: '580px' }}>
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
