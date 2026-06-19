import React from 'react';
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
  toggleLike: (postId: number) => void;
  deletePost: (postId: number) => void;
};

const TimeLine: React.FC<PropsType> = ({
  isSm,
  posts,
  profile,
  handleSubmitCreatePost,
  handleSubmitCreateComment,
  comments,
  toggleLike,
  deletePost,
}) => {
  return (
    <Grid container mt={3} display="flex">
      <Grid item sm={7} md={12} xs={12}>
        <Posts
          toggleLike={toggleLike}
          posts={posts}
          handleSubmitCreatePost={handleSubmitCreatePost}
          handleSubmitCreateComment={handleSubmitCreateComment}
          profile={profile}
          comments={comments}
          deletePost={deletePost}
        />
      </Grid>
    </Grid>
  );
};

export default React.memo(TimeLine);
