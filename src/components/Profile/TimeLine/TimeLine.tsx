import React, { Dispatch, SetStateAction } from 'react';
import { Grid } from '@mui/material';
import {
  CommentType,
  EditModeType,
  PostCommentFormData,
  ProfileType,
  UpdateCommentPayloadType,
  UpdatePostPayloadType,
} from '../../../types/types';
import Posts, { PostFormDataType, PostType } from './Posts/Posts';

type PropsType = {
  isSm: boolean;
  onPostCreate: (data: PostFormDataType) => void;
  onCommentCreate: (postId: number, commentText: string) => void;
  profile: ProfileType | null;
  posts: Array<PostType>;
  comments: Record<number, CommentType[]>;
  updateComment: (data: UpdateCommentPayloadType) => void;
  setEditCommentMode: Dispatch<SetStateAction<EditModeType>>;
  editCommentMode: EditModeType;
  toggleLike: (postId: number) => void;
  deletePost: (postId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  updatePost: (data: UpdatePostPayloadType) => void;
};

const TimeLine: React.FC<PropsType> = ({
  isSm,
  posts,
  profile,
  onPostCreate,
  onCommentCreate,
  comments,
  updateComment,
  toggleLike,
  deletePost,
  deleteComment,
  setEditCommentMode,
  editCommentMode,
  updatePost,
}) => {
  return (
    <Grid container mt={3} display="flex">
      <Grid item sm={7} md={12} xs={12}>
        <Posts
          toggleLike={toggleLike}
          posts={posts}
          onPostCreate={onPostCreate}
          onCommentCreate={onCommentCreate}
          updateComment={updateComment}
          profile={profile}
          comments={comments}
          deletePost={deletePost}
          deleteComment={deleteComment}
          editCommentMode={editCommentMode}
          setEditCommentMode={setEditCommentMode}
          updatePost={updatePost}
        />
      </Grid>
    </Grid>
  );
};

export default React.memo(TimeLine);
