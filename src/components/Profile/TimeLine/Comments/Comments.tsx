import React, { Dispatch, SetStateAction, useState } from 'react';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { CommentType, EditModeType, UpdateCommentPayloadType } from '../../../../types/types';
import Comment from './Comment';
import TextSubmitInput from '../../../Fields/SubmitInputField/TextSubmitInput';

type PropsType = {
  postId: number;
  isOpen: boolean;
  onCommentCreate: (postId: number, text: string) => void;
  comments: Record<number, CommentType[]>;
  updateComment: (data: UpdateCommentPayloadType) => void;
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
  const [commentText, setCommentText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    onCommentCreate(postId, commentText);

    setCommentText('');
    setIsSubmitting(false);
  };

  return (
    <Box>
      {isOpen && <Divider />}
      {isOpen && (
        <Box p={1}>
          {comments[postId] &&
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
              <TextSubmitInput
                text={commentText}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
                onChange={setCommentText}
                sxInput={{ width: '100%', '& .MuiInputBase-root': { borderRadius: '20px' } }}
                placeholder="Add your Comments.."
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Comments);
