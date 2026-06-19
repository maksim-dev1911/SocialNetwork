import React, { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { PostType } from './Posts';
import { ImageList } from '../TimeLine.style';
import DropDown from '../../../Common/DropDown/DropDown';
import { CommentType, PostCommentFormData } from '../../../../types/types';
import Comments from '../Comments/Comments';
import { getRelativeTime } from '../../../Common/RelativeTime/RelativeTime';

type PropsType = {
  post: PostType;
  handleSubmitCreateComment: (postId: number, data: PostCommentFormData) => void;
  comments: Record<number, CommentType[]>;
  toggleLike: (postId: number) => void;
  deletePost: (postId: number) => void;
};

const Post: React.FC<PropsType> = ({
  post,
  handleSubmitCreateComment,
  comments,
  toggleLike,
  deletePost,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Box
      mt={2}
      sx={{
        bgcolor: '#fff',
        borderRadius: '24px',
        border: '1px solid',
        borderColor: 'rgba(226, 232, 240, 0.6)',
        boxShadow: '0px 12px 32px rgba(15, 23, 42, 0.06)',
        padding: '15px',
      }}
    >
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
          <DropDown postId={post.id} deletePost={deletePost} />
        </Box>
      </Box>
      <Box sx={{ padding: '0 16px 16px 16px' }}>{post.text}</Box>
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
      <Comments
        postId={post.id}
        handleSubmitCreateComment={handleSubmitCreateComment}
        isOpen={isOpen}
        comments={comments}
      />
    </Box>
  );
};

export default React.memo(Post);
