import React, { Dispatch, SetStateAction, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CommentType } from '../../../../types/types';
import { getRelativeTime } from '../../../Common/RelativeTime/RelativeTime';
import DropDown from '../../../Common/DropDown/DropDown';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import sx from '../TimeLine.style';

type PropsType = {
  comment: CommentType;
  postId: number;
  saveEditComment: (text: string, postId: number, commentId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  setEditCommentMode: Dispatch<SetStateAction<{ editMode: boolean; id?: number }>>;
  editCommentMode: { editMode: boolean; id?: number };
};

const Comment: React.FC<PropsType> = ({
  comment,
  deleteComment,
  postId,
  setEditCommentMode,
  editCommentMode,
  saveEditComment,
}) => {
  const [commentText, setCommentText] = useState(comment.text);

  return (
    <Box p="10px 16px 10px 16px" alignItems="center">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Avatar>
            <img src={comment.creatorAvatar} alt="author-avatar" />
          </Avatar>
          <Box>
            <Typography fontSize="15px" fontFamily="Inter" ml={2}>
              {comment.creatorFullName}
            </Typography>
            <Typography fontSize="12px" fontFamily="Inter" color="#374151" ml={2}>
              {getRelativeTime(comment.createdAt)}
            </Typography>
          </Box>
        </Box>
        <Box>
          <DropDown
            id={comment.id}
            label="Edit Comment"
            setEditMode={setEditCommentMode}
            deletePost={() => deleteComment(postId, comment.id)}
          />
        </Box>
      </Box>
      {(!editCommentMode.editMode || editCommentMode.id !== comment.id) && (
        <Box mt={2}>
          <Typography fontSize="15px" color="#374151" p={1}>
            {comment.text}
          </Typography>
        </Box>
      )}
      {editCommentMode.editMode && editCommentMode.id === comment.id && (
        <Box mt={2}>
          <TextField
            sx={sx.addPostInput}
            onChange={(e) => setCommentText(e.currentTarget.value)}
            defaultValue={comment.text}
          />
          <Box display="flex" alignItems="center" gap={2} mt={2} justifyContent="flex-end">
            <Button onClick={() => setEditCommentMode({ editMode: false })} variant="outlined">
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => saveEditComment(commentText, postId, comment.id)}
            >
              Save
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Comment);
