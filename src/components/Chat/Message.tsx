import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { UserMessageType } from '../../types/types';
import { Stack } from '@mui/material';

type PropsType = {
  userMessage: UserMessageType;
  isGrouped: boolean;
  isOwn: boolean;
};

const AVATAR_SIZE = 36;

const Message: React.FC<PropsType> = ({ userMessage, isGrouped, isOwn }) => {
  const avatarSx = {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    mb: 0.25,
    boxShadow: '0 2px 8px rgba(15,23,42,.12)',
    flexShrink: 0,
  };

  const avatarSlot = (
    <Box
      sx={{
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        flexShrink: 0,
        visibility: isGrouped ? 'hidden' : 'visible',
      }}
    >
      {!isGrouped && (
        <Avatar src={userMessage?.photo} sx={avatarSx} />
      )}
    </Box>
  );

  return (
    <Stack
      direction="row"
      spacing={1.25}
      alignItems="flex-end"
      justifyContent={isOwn ? 'flex-end' : 'flex-start'}
      width="100%"
    >
      {!isOwn && avatarSlot}

      <Box
        sx={{
          maxWidth: { xs: '82%', sm: '68%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: isOwn ? 'flex-end' : 'flex-start',
        }}
      >
        {!isGrouped && (
          <Typography
            fontWeight={650}
            fontSize={12.5}
            lineHeight={1.2}
            color="text.secondary"
            sx={{ mb: 0.5, px: 0.5 }}
          >
            {isOwn ? 'You' : userMessage.userName}
          </Typography>
        )}

        <Box
          sx={{
            px: 1.75,
            py: 1.15,
            bgcolor: isOwn ? 'primary.main' : '#fff',
            color: isOwn ? '#fff' : 'text.primary',
            border: isOwn ? 'none' : '1px solid rgba(226,232,240,.9)',
            borderRadius: isOwn ? '18px 18px 6px 18px' : '18px 18px 18px 6px',
            width: 'fit-content',
            maxWidth: '100%',
            boxSizing: 'border-box',
            wordBreak: 'break-word',
            boxShadow: isOwn
              ? '0 8px 20px rgba(88, 80, 236, 0.28)'
              : '0 4px 14px rgba(15, 23, 42, 0.06)',
            transition: 'transform .15s ease, box-shadow .15s ease',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: isOwn
                ? '0 10px 24px rgba(88, 80, 236, 0.34)'
                : '0 8px 20px rgba(15, 23, 42, 0.1)',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              wordBreak: 'break-word',
              fontSize: 15,
              lineHeight: 1.5,
              whiteSpace: 'pre-wrap',
            }}
          >
            {userMessage.message}
          </Typography>
        </Box>
      </Box>

      {isOwn && avatarSlot}
    </Stack>
  );
};

export default React.memo(Message);
