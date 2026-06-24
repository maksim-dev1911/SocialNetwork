import React, { Dispatch, SetStateAction, useState } from 'react';
import Box from '@mui/material/Box';
import {
  CommentType,
  EditModeType,
  PostCommentFormData,
  ProfileType,
} from '../../../../types/types';
import Post from './Post';
import Typography from '@mui/material/Typography';
import CreatePostCard from '../CreatePostCard/CreatePostCard';

type PropsType = {
  profile: ProfileType | null;
  onPostCreate: (data: PostFormDataType) => void;
  onCommentCreate: (postId: number, data: PostCommentFormData) => void;
  posts: Array<PostType>;
  comments: Record<number, CommentType[]>;
  toggleLike: (postId: number) => void;
  updateComment: (text: string, postId: number, commentId: number) => void;
  deletePost: (postId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  setEditCommentMode: Dispatch<SetStateAction<EditModeType>>;
  editCommentMode: EditModeType;
  updatePost: (postId: number, text: string, photo: File | null, removePhoto: boolean) => void;
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
  photo: File;
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
    <Box width="100%">
      <Box>
        <CreatePostCard onPostCreate={onPostCreate} profile={profile} />
        {!posts.length && (
          <Typography mt={8} textAlign="center" fontSize="20px" color="#8C8C8C">
            Make your first publication
          </Typography>
        )}
        {posts.map((post) => {
          return (
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
          );
        })}
      </Box>
    </Box>
  );
};

export default React.memo(Posts);
