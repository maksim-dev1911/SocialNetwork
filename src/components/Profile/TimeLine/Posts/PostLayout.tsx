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
  const commentsCount = comments[post.id]?.length || 0;

  return (
    <Box>
      <Box
        display="flex"
        alignItems="flex-start"
        gap={1.5}
        px={{ xs: 1.75, sm: 2.25 }}
        pt={2.25}
        pb={1.5}
      >
        <Avatar
          src={post.creatorAvatar}
          sx={{
            width: 44,
            height: 44,
            boxShadow: '0 4px 12px rgba(15,23,42,0.12)',
          }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography fontSize={15} fontWeight={600} letterSpacing="-0.01em" noWrap color="#1e293b">
            {post.creatorFullName}
          </Typography>
          <Typography fontSize={12.5} color="text.secondary" fontWeight={500}>
            {getRelativeTime(post.createdAt)}
          </Typography>
        </Box>
        <DropDown id={post.id} label="Edit Post" onDelete={deletePost} onUpdate={setEditPostMode} />
      </Box>

      {post.text && (
        <Typography
          px={{ xs: 1.75, sm: 2.25 }}
          pb={post.photo ? 1.5 : 2}
          fontSize={15}
          lineHeight={1.55}
          color="text.primary"
          sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
        >
          {post.text}
        </Typography>
      )}

      {post.photo && (
        <Box px={{ xs: 1.25, sm: 2 }} pb={2}>
          <Box
            component="img"
            src={post.photo}
            alt=""
            sx={{
              width: '100%',
              maxHeight: 560,
              objectFit: 'cover',
              display: 'block',
              borderRadius: 3,
              border: '1px solid rgba(226,232,240,0.8)',
            }}
          />
        </Box>
      )}

      <Divider sx={{ borderColor: 'rgba(226,232,240,0.8)' }} />

      <Box display="flex" alignItems="center" gap={1} px={{ xs: 1.25, sm: 1.75 }} py={1}>
        <Box
          onClick={() => toggleLike(post.id)}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 1.5,
            py: 0.85,
            borderRadius: '12px',
            cursor: 'pointer',
            color: post.isLiked ? '#DC2626' : 'text.secondary',
            bgcolor: post.isLiked ? 'rgba(239, 68, 68, 0.08)' : 'transparent',
            fontWeight: 650,
            fontSize: 14,
            transition: 'background-color .15s ease, color .15s ease',
            userSelect: 'none',
            '&:hover': {
              bgcolor: post.isLiked ? 'rgba(239, 68, 68, 0.12)' : 'rgba(88, 80, 236, 0.06)',
              color: post.isLiked ? '#DC2626' : 'primary.main',
            },
          }}
        >
          {post.isLiked ? (
            <FavoriteIcon fontSize="small" />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )}
          <Typography component="span" fontSize={14} fontWeight={650}>
            {post.likedCount}
          </Typography>
        </Box>

        <Box
          onClick={toggleIsOpen}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 1.5,
            py: 0.85,
            borderRadius: '12px',
            cursor: 'pointer',
            color: 'text.secondary',
            fontWeight: 650,
            fontSize: 14,
            transition: 'background-color .15s ease, color .15s ease',
            userSelect: 'none',
            '&:hover': {
              bgcolor: 'rgba(88, 80, 236, 0.06)',
              color: 'primary.main',
            },
          }}
        >
          <SmsOutlinedIcon fontSize="small" />
          <Typography component="span" fontSize={14} fontWeight={650}>
            {commentsCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(PostLayout);
