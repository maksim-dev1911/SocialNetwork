import React from 'react';

import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type PropsType = {
  onChange: (value: File) => void;
  label: string;
};

const PhotoPickerField: React.FC<PropsType> = ({ onChange, label }) => {
  const photoRef = React.useRef<HTMLInputElement>(null);

  return (
    <Box onClick={() => photoRef.current?.click()}>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        sx={{
          cursor: 'pointer',
          transition: 'all .2s ease',
          px: { xs: 1.5, sm: 2.5 },
          py: 0.85,
          borderRadius: '12px',
          '&:hover': {
            backgroundColor: 'rgba(99,102,241,.06)',
          },
        }}
      >
        <PhotoOutlinedIcon sx={{ color: '#6366F1' }} />
        <Typography
          variant="body2"
          lineHeight={1}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {label}
        </Typography>
      </Box>
      <input
        ref={photoRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          onChange(file);

          e.target.value = '';
        }}
      />
    </Box>
  );
};

export default React.memo(PhotoPickerField);
