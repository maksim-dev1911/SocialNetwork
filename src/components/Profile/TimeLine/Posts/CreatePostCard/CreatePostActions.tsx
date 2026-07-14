import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import PhotoPickerField from '../../../../Fields/PhotoPickerField/PhotoPickerField';

type PropsType = {
  selectedPhoto?: File | null;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<File | null>>;
  onPhotoChange: (value: File) => void;
};

const CreatePostActions: React.FC<PropsType> = ({
  selectedPhoto,
  setSelectedPhoto,
  onPhotoChange,
}) => {
  const actionButtons = [
    {
      element: <PhotoPickerField onChange={onPhotoChange} label="Photo" />,
      type: 'photo',
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

  const clearInput = () => {
    setSelectedPhoto(null);
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
          ml={{ xs: 2, sm: 9 }}
          mb={2}
          maxWidth="100%"
          borderRadius="20px"
          bgcolor="#F3F4F6"
        >
          <Typography
            variant="body2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: { xs: 160, sm: 280 },
            }}
          >
            {selectedPhoto.name}
          </Typography>
          <IconButton
            size="small"
            onClick={clearInput}
            sx={{
              p: '2px',
              flexShrink: 0,
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
      <Box display="flex" flexWrap="wrap" gap={1} p={{ xs: 1, sm: 2 }}>
        {actionButtons.map((item) => (
          <Box key={item.type}>
            {item.element || (
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                px={{ xs: 1, sm: 2 }}
                sx={{
                  cursor: 'pointer',
                  transition: 'all .2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(99,102,241,.06)',
                    borderRadius: '12px',
                  },
                }}
              >
                {item.icon}
                <Typography
                  variant="body2"
                  lineHeight={1}
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                  {item.text}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default React.memo(CreatePostActions);
