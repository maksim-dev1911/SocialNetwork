import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CommentType } from '../../../../types/types';
import { getRelativeTime } from '../../../Common/RelativeTime/RelativeTime';

type PropsType = {
  comment: CommentType;
}

const Comment: React.FC<PropsType> = ({ comment }) => {


  return (
    <Box p='10px 16px 10px 16px' alignItems='center'>
      <Box display='flex' alignItems='center'>
        <Avatar>
          <img src={comment.creatorAvatar} alt='author-avatar' />
        </Avatar>
        <Box>
          <Typography fontSize='15px' fontFamily='Inter' ml={2}>
            {comment.creatorFullName}
          </Typography>
          <Typography fontSize='12px' fontFamily='Inter' color='#374151' ml={2}>
            {getRelativeTime(comment.createdAt)}
          </Typography>
        </Box>
      </Box>
      <Box mt={2}>
        <Typography
          sx={{ backgroundColor: '#F3F4F6', borderRadius: '10px' }}
          fontSize='15px'
          color='#374151'
          p={1}
        >
          {comment.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(Comment);