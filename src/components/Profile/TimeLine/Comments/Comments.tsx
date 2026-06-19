import React from 'react';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Form } from 'react-final-form';
import { CommentType, PostCommentFormData } from '../../../../types/types';
import TextFieldControlled from '../../../Fields/TextFieldControlled/TextFieldControlled';
import LoadingButton from '@mui/lab/LoadingButton';
import Comment from './Comment';

type PropsType = {
  postId: number;
  isOpen: boolean
  handleSubmitCreateComment: (postId: number, data: PostCommentFormData) => void;
  comments: Record<number, CommentType[]>;
}

const Comments: React.FC<PropsType> = ({ isOpen, handleSubmitCreateComment, postId, comments }) => {
  return (
    <Box>
      {isOpen && <Divider />}
      {isOpen && (
        <Box p={1}>
          {comments[postId]?.length && comments[postId].map((comment: CommentType) => (
            <Comment comment={comment} key={comment.id} />
          ))}
          <Box p={1}>
            <Form
              onSubmit={(data: PostCommentFormData) => handleSubmitCreateComment(postId, data)}
              render={({ handleSubmit, submitting }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Box display='flex'>
                      <TextFieldControlled
                        type='input'
                        name='text'
                        size='small'
                        sx={{ width: '100%', '& .MuiInputBase-root': { borderRadius: '20px' } }}
                        placeholder='Add your Comments..'
                      />
                      <LoadingButton
                        disabled={submitting}
                        loading={submitting}
                        variant='contained'
                        size='small'
                        type='submit'
                        sx={{ ml: 2 }}
                      >
                        Share
                      </LoadingButton>
                    </Box>
                  </form>
                );
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Comments);