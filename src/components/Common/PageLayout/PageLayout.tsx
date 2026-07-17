import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type PropsType = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const PageLayout: React.FC<PropsType> = ({ children, title, description }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={800}
        sx={{
          letterSpacing: '-0.04em',
          color: 'text.primary',
          fontSize: { xs: '1.5rem', sm: '2.125rem' },
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 0.5,
          color: 'text.secondary',
          fontWeight: 500,
          fontSize: { xs: '0.875rem', sm: '1rem' },
        }}
      >
        {description}
      </Typography>
      {children}
    </Box>
  );
};

export default React.memo(PageLayout);
