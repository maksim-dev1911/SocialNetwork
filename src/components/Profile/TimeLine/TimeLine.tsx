import React, { Dispatch, SetStateAction } from 'react';
import { Grid } from '@mui/material';
import { CommentType, PostCommentFormData, ProfileType } from '../../../types/types';
import Posts, { PostFormDataType, PostType } from './Posts/Posts';

type PropsType = {
  isSm: boolean;
  handleSubmitCreatePost: (data: PostFormDataType) => void;
  handleSubmitCreateComment: (postId: number, data: PostCommentFormData) => void;
  profile: ProfileType | null;
  posts: Array<PostType>;
  comments: Record<number, CommentType[]>;
  saveEditComment: (text: string, postId: number, commentId: number) => void;
  setEditCommentMode: Dispatch<SetStateAction<{ editMode: boolean; id?: number }>>;
  editCommentMode: { editMode: boolean; id?: number };
  toggleLike: (postId: number) => void;
  deletePost: (postId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  saveUpdatePost: (postId: number, text: string, photo: File | null, removePhoto: boolean) => void;
};

const TimeLine: React.FC<PropsType> = ({
  isSm,
  posts,
  profile,
  handleSubmitCreatePost,
  handleSubmitCreateComment,
  comments,
  saveEditComment,
  toggleLike,
  deletePost,
  deleteComment,
  setEditCommentMode,
  editCommentMode,
  saveUpdatePost,
}) => {
  return (
    <Grid container mt={3} display="flex">
      <Grid item sm={7} md={12} xs={12}>
        <Posts
          toggleLike={toggleLike}
          posts={posts}
          handleSubmitCreatePost={handleSubmitCreatePost}
          handleSubmitCreateComment={handleSubmitCreateComment}
          saveEditComment={saveEditComment}
          profile={profile}
          comments={comments}
          deletePost={deletePost}
          deleteComment={deleteComment}
          editCommentMode={editCommentMode}
          setEditCommentMode={setEditCommentMode}
          saveUpdatePost={saveUpdatePost}
        />
      </Grid>
    </Grid>
  );
};

export default React.memo(TimeLine);
