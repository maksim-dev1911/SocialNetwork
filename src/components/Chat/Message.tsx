import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { sx } from './Messages.style';
import { UserMessageType } from '../../types/types';

type PropsType = {
  userMessage: UserMessageType;
};

const Message: React.FC<PropsType> = ({ userMessage }) => {
  return (
    <Box display='flex' alignItems='center' gap={1.5} sx={sx.messageWrapper}>
      <Avatar src={userMessage.photo} />
      <Box sx={{
        bgcolor: 'white',
        boxShadow: '0 8px 40px rgba(0,0,0,.15)', p: 2, borderRadius: '10px 10px 10px 0px',
      }}>
        <Typography fontWeight='bold'>{userMessage.userName}</Typography>
        <Typography>{userMessage.message}</Typography>
      </Box>
    </Box>
  );
};

export default React.memo(Message);
