import React, { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import {
  CommentType,
  EditModeType,
  ProfileType,
  UpdateCommentPayloadType,
  UpdatePostPayloadType,
} from '../../../../types/types';
import Post from './Post';
import Typography from '@mui/material/Typography';
import CreatePostCard from './CreatePostCard/CreatePostCard';
import sx from '../TimeLine.style';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

type PropsType = {
  profile: ProfileType | null;
  onPostCreate: (data: PostFormDataType) => void;
  onCommentCreate: (postId: number, commentText: string) => void;
  posts: Array<PostType>;
  comments: Record<number, CommentType[]>;
  toggleLike: (postId: number) => void;
  updateComment: (data: UpdateCommentPayloadType) => void;
  deletePost: (postId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  setEditCommentMode: Dispatch<SetStateAction<EditModeType>>;
  editCommentMode: EditModeType;
  updatePost: (data: UpdatePostPayloadType) => void;
};

export type PostType = {
  creatorAvatar?: string;
  creatorFullName: string;
  text: string;
  photo?: string | null;
  id: number;
  createdAt: number;
  isLiked: boolean;
  likedCount: number;
};

export interface PostFormDataType {
  text: string;
  photo: File | null;
}

const Posts: React.FC<PropsType> = ({
  profile,
  posts,
  onPostCreate,
  onCommentCreate,
  comments,
  toggleLike,
  deletePost,
  deleteComment,
  setEditCommentMode,
  editCommentMode,
  updateComment,
  updatePost,
}) => {
  return (
    <Box sx={sx.feed}>
      <CreatePostCard onPostCreate={onPostCreate} profile={profile} />

      {!posts.length && (
        <Box sx={sx.empty}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '20px',
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'rgba(88, 80, 236, 0.1)',
              color: 'primary.main',
              mx: 'auto',
              mb: 2,
            }}
          >
            <ArticleOutlinedIcon fontSize="large" />
          </Box>
          <Typography fontWeight={800} fontSize={18} color="text.primary" mb={0.75}>
            No posts yet
          </Typography>
          <Typography fontSize={14} color="text.secondary" maxWidth={320} mx="auto">
            Share your first update with the community.
          </Typography>
        </Box>
      )}

      {posts.map((post) => (
        <Post
          key={post.id}
          onCommentCreate={onCommentCreate}
          post={post}
          comments={comments}
          toggleLike={toggleLike}
          updateComment={updateComment}
          updatePost={updatePost}
          deletePost={deletePost}
          deleteComment={deleteComment}
          editCommentMode={editCommentMode}
          setEditCommentMode={setEditCommentMode}
        />
      ))}
    </Box>
  );
};

export default React.memo(Posts);
