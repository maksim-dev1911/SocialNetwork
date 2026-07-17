import React, { Dispatch, SetStateAction, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CommentType, EditModeType, UpdateCommentPayloadType } from '../../../../types/types';
import { getRelativeTime } from '../../../Common/RelativeTime/RelativeTime';
import DropDown from '../../../Common/DropDown/ActionsDropdown';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import sx from '../TimeLine.style';

type PropsType = {
  comment: CommentType;
  postId: number;
  updateComment: (data: UpdateCommentPayloadType) => void;
  deleteComment: (postId: number, commentId: number) => void;
  setEditCommentMode: Dispatch<SetStateAction<EditModeType>>;
  editCommentMode: EditModeType;
};

const Comment: React.FC<PropsType> = ({
  comment,
  deleteComment,
  postId,
  setEditCommentMode,
  editCommentMode,
  updateComment,
}) => {
  const [commentText, setCommentText] = useState(comment.commentText);

  const isEditMode = editCommentMode.editMode && editCommentMode.id === comment.id;

  const updateCommentData: UpdateCommentPayloadType = {
    postId,
    commentText,
    commentId: comment.id,
  };

  return (
    <Box py={1.25}>
      <Box display="flex" alignItems="flex-start" gap={1.25}>
        <Avatar
          src={comment.creatorAvatar}
          alt={comment.creatorFullName}
          sx={{ width: 36, height: 36, flexShrink: 0 }}
        />
        <Box flex={1} minWidth={0}>
          <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>
            <Box minWidth={0}>
              <Typography fontSize={14} fontWeight={600} noWrap>
                {comment.creatorFullName}
              </Typography>
              <Typography fontSize={11.5} color="text.secondary" fontWeight={500}>
                {getRelativeTime(comment.createdAt)}
              </Typography>
            </Box>
            <DropDown
              id={comment.id}
              label="Edit Comment"
              onUpdate={setEditCommentMode}
              onDelete={() => deleteComment(postId, comment.id)}
            />
          </Box>

          {!isEditMode && (
            <Box sx={sx.commentBubble}>
              <Typography
                fontSize={14}
                color="text.primary"
                sx={{ wordBreak: 'break-word', lineHeight: 1.5 }}
              >
                {comment.commentText}
              </Typography>
            </Box>
          )}

          {isEditMode && (
            <Box mt={1.25}>
              <TextField
                fullWidth
                multiline
                minRows={2}
                sx={sx.addPostInput}
                onChange={(e) => setCommentText(e.currentTarget.value)}
                defaultValue={comment.commentText}
              />
              <Box display="flex" alignItems="center" gap={1} mt={1.25} justifyContent="flex-end">
                <Button
                  onClick={() => setEditCommentMode({ editMode: false })}
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: 'none', borderRadius: '10px', fontWeight: 650 }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => updateComment(updateCommentData)}
                  sx={{ textTransform: 'none', borderRadius: '10px', fontWeight: 650 }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Comment);
