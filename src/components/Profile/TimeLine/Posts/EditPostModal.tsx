import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { PostFormDataType, PostType } from './Posts';
import LoadingButton from '@mui/lab/LoadingButton';
import CreatePostActions from './CreatePostCard/CreatePostActions';
import { FormApi } from 'final-form';
import { getRelativeTime } from '../../../Common/RelativeTime/RelativeTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { EditModeType, UpdatePostPayloadType } from '../../../../types/types';

type PropsType = {
  open: boolean;
  newText?: string | null;
  onClose: Dispatch<SetStateAction<EditModeType>>;
  updatePost: (data: UpdatePostPayloadType) => void;
  onChange: (value: string) => void;
  post: PostType;
  newPhoto: File | null;
  setNewPhoto: React.Dispatch<React.SetStateAction<File | null>>;
  commentsCount: number;
};

export const EditPostModal: React.FC<PropsType> = ({
  open,
  newText,
  newPhoto,
  onClose,
  updatePost,
  onChange,
  post,
  setNewPhoto,
  commentsCount,
}) => {
  const [removePhoto, setRemovePhoto] = useState(false);

  const imageSrc = useMemo(() => {
    if (removePhoto) return null;

    if (newPhoto) {
      return URL.createObjectURL(newPhoto);
    }

    return post.photo;
  }, [newPhoto, post.photo, removePhoto]);

  const updatePostData: UpdatePostPayloadType = {
    postId: post.id,
    newText,
    photo: newPhoto,
    removePhoto,
  };

  return (
    <Modal open={open} onClose={() => onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900,
          bgcolor: '#fff',
          borderRadius: 4,
          boxShadow: '0 20px 50px rgba(0,0,0,.15)',
          overflow: 'hidden',
        }}
      >
        <Box display="flex">
          <Box flex={1} p={4}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h5" fontWeight={700}>
                Edit post
              </Typography>

              <IconButton onClick={() => onClose({ editMode: false })}>
                <CloseIcon />
              </IconButton>
            </Stack>

            <Typography color="text.secondary" mb={1} fontSize={14}>
              Your post
            </Typography>

            <TextField
              multiline
              rows={10}
              fullWidth
              defaultValue={post.text}
              onChange={(e) => onChange(e.target.value)}
            />

            <Typography textAlign="right" color="text.secondary" my={1}>
              {newText?.length}/500
            </Typography>
            <CreatePostActions
              setSelectedPhoto={setNewPhoto}
              onPhotoChange={(value) => {
                setNewPhoto(value);
                setRemovePhoto(false);
              }}
            />
          </Box>

          <Box
            sx={{
              width: 400,
              bgcolor: '#f8fafc',
              borderLeft: '1px solid #e5e7eb',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography fontWeight={600} mb={2}>
              Preview
            </Typography>

            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                bgcolor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 3,
              }}
            >
              <Box p={2}>
                <Stack direction="row" spacing={1.5}>
                  <Avatar src={post.creatorAvatar} />

                  <Box>
                    <Typography fontWeight={600}>{post.creatorFullName}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {getRelativeTime(post.createdAt)}
                    </Typography>
                  </Box>
                </Stack>

                <Typography
                  mt={2}
                  sx={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  {newText}
                </Typography>
              </Box>

              {(newPhoto || post.photo) && (
                <Box
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    overflow: 'hidden',

                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(0,0,0,0)',
                      transition: 'all 0.3s ease',
                    },

                    '& .delete-icon': {
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: '#fff',
                      fontSize: 50,
                      opacity: 0,
                      zIndex: 2,
                      transition: 'all 0.3s ease',
                    },

                    '&:hover::after': {
                      bgcolor: 'rgba(0,0,0,0.6)',
                    },

                    '&:hover .delete-icon': {
                      opacity: 1,
                    },
                  }}
                >
                  {imageSrc && (
                    <Box
                      component="img"
                      src={imageSrc}
                      alt=""
                      sx={{
                        width: '100%',
                        display: 'block',
                        objectFit: 'cover',
                        maxHeight: 250,
                      }}
                    />
                  )}

                  <CloseIcon
                    className="delete-icon"
                    onClick={() => {
                      setNewPhoto(null);
                      setRemovePhoto(true);
                    }}
                  />
                </Box>
              )}

              <Divider />

              <Stack direction="row" spacing={3} p={2}>
                <Stack direction="row" spacing={1}>
                  <FavoriteBorderIcon />
                  <Typography color="text.secondary">{post.likedCount}</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <SmsOutlinedIcon />
                  <Typography color="text.secondary">{commentsCount}</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Divider />

        <Stack direction="row" justifyContent="flex-end" spacing={2} p={3}>
          <Button variant="outlined" onClick={() => onClose({ editMode: false })}>
            Cancel
          </Button>

          <LoadingButton
            variant="contained"
            onClick={() => {
              updatePost(updatePostData);
              onClose({ editMode: false });
            }}
            disabled={!newText?.trim()}
          >
            Save changes
          </LoadingButton>
        </Stack>
      </Box>
    </Modal>
  );
};

export default React.memo(EditPostModal);
