import React, { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { getRelativeTime } from '../../../Common/RelativeTime/RelativeTime';
import DropDown from '../../../Common/DropDown/ActionsDropdown';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { PostType } from './Posts';
import { CommentType, EditModeType } from '../../../../types/types';

type PropsType = {
  post: PostType;
  comments: Record<number, CommentType[]>;
  setEditPostMode: Dispatch<SetStateAction<EditModeType>>;
  deletePost: (postId: number) => void;
  toggleIsOpen: () => void;
  toggleLike: (postId: number) => void;
};

const PostLayout: React.FC<PropsType> = ({
  post,
  comments,
  deletePost,
  setEditPostMode,
  toggleLike,
  toggleIsOpen,
}) => {
  return (
    <Box>
      <Box display="flex" p={2}>
        <Avatar>
          <img src={post.creatorAvatar} />
        </Avatar>
        <Box sx={{ width: '100%' }}>
          <Typography ml={2} fontSize="15px">
            {post.creatorFullName}
          </Typography>
          <Typography ml={2} fontSize="12px" color="#89919E">
            {getRelativeTime(post.createdAt)}
          </Typography>
        </Box>
        <Box>
          <DropDown
            id={post.id}
            label="Edit Post"
            onDelete={deletePost}
            onUpdate={setEditPostMode}
          />
        </Box>
      </Box>
      <Box sx={{ padding: '0 16px 16px 16px', wordBreak: 'break-word' }}>{post.text}</Box>
      {post.photo && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: '16px',
          }}
        >
          <Box
            component="img"
            src={post.photo}
            alt=""
            sx={{
              width: 'auto',
              maxWidth: '100%',
              maxHeight: 700,
              display: 'block',
              borderRadius: 3,
            }}
          />
        </Box>
      )}
      <Divider />
      <Box p={2}>
        <Box display="flex">
          <Box
            display="flex"
            mr={2}
            sx={{ cursor: 'pointer', '&:hover': { color: '#0056b3' } }}
            onClick={() => toggleLike(post.id)}
          >
            {post.isLiked ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon />}
            <Typography sx={{ color: '#666666' }} ml={1}>
              {post.likedCount}
            </Typography>
          </Box>
          <Box
            display="flex"
            onClick={toggleIsOpen}
            sx={{ cursor: 'pointer', '&:hover': { color: '#0056b3' } }}
          >
            <SmsOutlinedIcon />
            <Typography sx={{ color: '#666666' }} ml={1}>
              {comments[post.id]?.length || 0}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(PostLayout);
