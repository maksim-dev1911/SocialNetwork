import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { FormApi } from 'final-form';
import { PostFormDataType } from '../Posts/Posts';

type PropsType = {
  selectedPhoto?: File | null;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<File | null>>;
  photoInputRef: React.RefObject<HTMLInputElement>;
  formRef: React.MutableRefObject<FormApi<PostFormDataType> | null>;
};

const actionButtons = [
  {
    icon: <PhotoOutlinedIcon sx={{ color: '#6366F1' }} />,
    type: 'photo',
    text: 'Photo',
  },
  {
    icon: <PollOutlinedIcon sx={{ color: '#F59E0B' }} />,
    type: 'poll',
    text: 'Poll',
  },
  {
    icon: <SentimentSatisfiedOutlinedIcon sx={{ color: '#EC4899' }} />,
    type: 'feeling',
    text: 'Feeling',
  },
];

const CreatePostActions: React.FC<PropsType> = ({
  photoInputRef,
  selectedPhoto,
  setSelectedPhoto,
  formRef,
}) => {
  const clearInput = () => {
    setSelectedPhoto(null);

    formRef.current?.change('photo', undefined);

    if (photoInputRef.current) {
      photoInputRef.current.value = '';
    }
  };

  return (
    <>
      {selectedPhoto && (
        <Box
          display="inline-flex"
          alignItems="center"
          gap={1}
          px={1.5}
          py={0.5}
          ml={9}
          mb={2}
          borderRadius="20px"
          bgcolor="#F3F4F6"
        >
          <Typography variant="body2">{selectedPhoto.name}</Typography>
          <IconButton
            size="small"
            onClick={clearInput}
            sx={{
              p: '2px',
              '&:hover': {
                backgroundColor: 'rgba(239,68,68,.08)',
                color: 'error.main',
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
      <Divider />
      <Box display="flex" gap={1} p={2}>
        {actionButtons.map((item) => (
          <Box key={item.type}>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              px={2}
              sx={{
                cursor: 'pointer',
                transition: 'all .2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(99,102,241,.06)',
                  borderRadius: '12px',
                },
              }}
              onClick={() => {
                if (item.type === 'photo') {
                  photoInputRef.current?.click();
                }
              }}
            >
              {item.icon}
              <Typography variant="body2" lineHeight={1}>
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default React.memo(CreatePostActions);
