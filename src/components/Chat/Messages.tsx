import React, { RefObject } from 'react';
import Box from '@mui/material/Box';
import { Message } from './index';
import { UserMessageType } from '../../types/types';

type PropsType = {
  usersMessages: UserMessageType[];
  messagesEndRef: RefObject<HTMLDivElement>;
};

const Messages: React.FC<PropsType> = ({ usersMessages, messagesEndRef }) => {
  return (
    <Box sx={{borderRadius: '10px', overflowY: 'auto', height: '600px' }}>
      {usersMessages.map((u, index) => {
        return (
          <Box key={index} pb={1}>
            <Message userMessage={u} />
            <div ref={messagesEndRef} />
          </Box>
        );
      })}
    </Box>
  );
};

export default React.memo(Messages);
