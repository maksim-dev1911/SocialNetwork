import React from 'react';
import { CircularProgress, Stack } from '@mui/material';
import { sx } from './Preloader.style';

type PropsType = {};

const Preloader: React.FC<PropsType> = () => {
  return (
    <Stack sx={sx.preloaderStyle}>
      <CircularProgress size={50} sx={{ color: '#6252CE' }} />
    </Stack>
  );
};

export default React.memo(Preloader);
