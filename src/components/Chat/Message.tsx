import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { UserMessageType } from '../../types/types';
import { Stack } from '@mui/material';

type PropsType = {
  userMessage: UserMessageType;
  isGrouped: boolean;
};

const Message: React.FC<PropsType> = ({ userMessage, isGrouped }) => {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      {!isGrouped && (
        <Avatar
          src={userMessage?.photo}
          sx={{
            width: 42,
            height: 42,
            mt: 0.5,
          }}
        />
      )}

      {isGrouped && <Box sx={{ width: 44 }} />}

      <Box>
        {!isGrouped && (
          <Typography fontWeight={600} fontSize={14} lineHeight={1.2}>
            {userMessage.userName}
          </Typography>
        )}

        <Box
          sx={{
            mt: 0.5,
            px: 2,
            py: 1.25,

            backgroundColor: '#fff',

            border: '1px solid',
            borderColor: 'divider',

            borderRadius: '16px',

            maxWidth: { xs: '100%', sm: '550px' },
            width: 'fit-content',
            boxSizing: 'border-box',
            wordBreak: 'break-word',

            boxShadow: '0 1px 3px rgba(0,0,0,.05)',

            transition: 'all .15s ease',

            '&:hover': {
              boxShadow: '0 3px 10px rgba(0,0,0,.08)',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              wordBreak: 'break-word',
            }}
          >
            {userMessage.message}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default React.memo(Message);
