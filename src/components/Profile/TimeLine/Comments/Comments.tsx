import React, { Dispatch, SetStateAction } from 'react';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Form } from 'react-final-form';
import { CommentType, EditModeType, PostCommentFormData } from '../../../../types/types';
import TextFieldControlled from '../../../Fields/TextFieldControlled/TextFieldControlled';
import LoadingButton from '@mui/lab/LoadingButton';
import Comment from './Comment';

type PropsType = {
  postId: number;
  isOpen: boolean;
  onCommentCreate: (postId: number, data: PostCommentFormData) => void;
  comments: Record<number, CommentType[]>;
  updateComment: (text: string, postId: number, commentId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  setEditCommentMode: Dispatch<SetStateAction<EditModeType>>;
  editCommentMode: EditModeType;
};

const Comments: React.FC<PropsType> = ({
  isOpen,
  onCommentCreate,
  postId,
  comments,
  deleteComment,
  setEditCommentMode,
  editCommentMode,
  updateComment,
}) => {
  return (
    <Box>
      {isOpen && <Divider />}
      {isOpen && (
        <Box p={1}>
          {comments[postId]?.length &&
            comments[postId].map((comment: CommentType) => (
              <Comment
                comment={comment}
                key={comment.id}
                postId={postId}
                updateComment={updateComment}
                deleteComment={deleteComment}
                editCommentMode={editCommentMode}
                setEditCommentMode={setEditCommentMode}
              />
            ))}
          {!editCommentMode.editMode && (
            <Box p={1}>
              <Form
                onSubmit={(data: PostCommentFormData) => onCommentCreate(postId, data)}
                render={({ handleSubmit, submitting }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <Box display="flex">
                        <TextFieldControlled
                          type="input"
                          name="text"
                          size="small"
                          sx={{ width: '100%', '& .MuiInputBase-root': { borderRadius: '20px' } }}
                          placeholder="Add your Comments.."
                        />
                        <LoadingButton
                          disabled={submitting}
                          loading={submitting}
                          variant="contained"
                          size="small"
                          type="submit"
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
          )}
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Comments);
