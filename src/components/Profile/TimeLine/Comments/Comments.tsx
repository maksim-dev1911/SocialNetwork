import React, { Dispatch, SetStateAction, useState } from 'react';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CommentType, EditModeType, UpdateCommentPayloadType } from '../../../../types/types';
import Comment from './Comment';
import TextSubmitInput from '../../../Fields/SubmitInputField/TextSubmitInput';
import sx from '../TimeLine.style';

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

  const postComments = comments[postId] || [];

  const handleSubmit = () => {
    setIsSubmitting(true);
    onCommentCreate(postId, commentText);

    setCommentText('');
    setIsSubmitting(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Box>
      <Divider sx={{ borderColor: 'rgba(226,232,240,0.8)' }} />
      <Box px={{ xs: 1.5, sm: 2 }} py={1.5} bgcolor="rgba(248, 250, 252, 0.7)">
        {postComments.length > 0 && (
          <Typography fontSize={12.5} fontWeight={700} color="text.secondary" mb={1} px={0.5}>
            Comments · {postComments.length}
          </Typography>
        )}

        {postComments.map((comment: CommentType) => (
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
          <Box pt={postComments.length ? 1 : 0.5}>
            <TextSubmitInput
              text={commentText}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
              onChange={setCommentText}
              sxInput={sx.addPostInput}
              placeholder="Write a comment..."
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default React.memo(Comments);
