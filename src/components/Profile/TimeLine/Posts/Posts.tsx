import React, { Dispatch, SetStateAction, useState } from 'react';
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
  saveEditComment: (text: string, postId: number, commentId: number) => void;
  deletePost: (postId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  setEditCommentMode: Dispatch<SetStateAction<{ editMode: boolean; id?: number }>>;
  editCommentMode: { editMode: boolean; id?: number };
  saveUpdatePost: (postId: number, text: string, photo: File | null, removePhoto: boolean) => void;
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
  handleSubmitCreatePost,
  handleSubmitCreateComment,
  comments,
  toggleLike,
  deletePost,
  deleteComment,
  setEditCommentMode,
  editCommentMode,
  saveEditComment,
  saveUpdatePost,
}) => {
  return (
    <Box width="100%">
      <Box>
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
              saveEditComment={saveEditComment}
              saveUpdatePost={saveUpdatePost}
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
