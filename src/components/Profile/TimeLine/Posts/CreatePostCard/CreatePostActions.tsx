import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
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
          mx={{ xs: 1.5, sm: 2.25 }}
          mb={1.5}
          maxWidth="calc(100% - 32px)"
          borderRadius="999px"
          bgcolor="rgba(88, 80, 236, 0.08)"
          border="1px solid rgba(88, 80, 236, 0.12)"
        >
          <Typography
            variant="body2"
            fontWeight={600}
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
      <Divider sx={{ borderColor: 'rgba(226,232,240,0.85)' }} />
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        gap={0.5}
        px={{ xs: 1, sm: 1.5 }}
        py={1}
      >
        {actionButtons.map((item) => (
          <Box key={item.type}>
            {item.element}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default React.memo(CreatePostActions);
