import React from 'react';
import Box from '@mui/material/Box';
import { CommentType, PostCommentFormData, ProfileType } from '../../../../types/types';
import Post from './Post';
import Typography from '@mui/material/Typography';
import CreatePostCard from '../CreatePostCard/CreatePostCard';

type PropsType = {
  profile: ProfileType | null;
  handleSubmitCreatePost: (data: PostFormDataType) => void;
  handleSubmitCreateComment: (postId: number, data: PostCommentFormData) => void;
  posts: Array<PostType>;
  comments: Record<number, CommentType[]>;
  toggleLike: (postId: number) => void;
  deletePost: (postId: number) => void;
};

export type PostType = {
  creatorAvatar?: string;
  creatorFullName: string;
  text: string;
  photo?: string;
  id: number;
  createdAt: number;
  isLiked: boolean;
  likedCount: number;
};

export interface PostFormDataType {
  text: string;
  photo: File;
}

const Posts: React.FC<PropsType> = ({
  profile,
  posts,
  handleSubmitCreatePost,
  handleSubmitCreateComment,
  comments,
  toggleLike,
  deletePost,
}) => {
  return (
    <Box width="100%">
      <CreatePostCard handleSubmitCreatePost={handleSubmitCreatePost} profile={profile} />
      {!posts.length && (
        <Typography mt={8} textAlign="center" fontSize="20px" color="#8C8C8C">
          Make your first publication
        </Typography>
      )}
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            handleSubmitCreateComment={handleSubmitCreateComment}
            post={post}
            comments={comments}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })}
    </Box>
  );
};

export default React.memo(Posts);
