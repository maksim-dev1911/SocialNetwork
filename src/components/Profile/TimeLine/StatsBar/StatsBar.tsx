import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type PropsType = {
  totalFriendsCount: number;
  totalPostsCount: number;
};

const StatsBar: React.FC<PropsType> = ({ totalFriendsCount, totalPostsCount }) => {
  const statsBarItems = [
    { title: 'Publications', item: `${totalPostsCount}` },
    { title: 'Friends', item: `${totalFriendsCount}` },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, minmax(0, 1fr))"
      gap={{ xs: 1, sm: 1.5 }}
      mt={3}
      maxWidth={480}
      mx="auto"
      width="100%"
    >
      {statsBarItems.map((item) => (
        <Box
          key={item.title}
          textAlign="center"
          sx={{
            py: { xs: 1.25, sm: 1.5 },
            px: 1,
            borderRadius: 3,
            bgcolor: 'rgba(88, 80, 236, 0.04)',
            border: '1px solid rgba(88, 80, 236, 0.08)',
            transition: 'transform .15s ease, background-color .15s ease',
            '&:hover': {
              transform: 'translateY(-1px)',
              bgcolor: 'rgba(88, 80, 236, 0.07)',
            },
          }}
        >
          <Typography
            fontSize={{ xs: 18, sm: 20 }}
            fontWeight={800}
            color="#1e293b"
            letterSpacing="-0.02em"
            lineHeight={1.1}
          >
            {item.item}
          </Typography>
          <Typography
            fontSize={{ xs: 11, sm: 12.5 }}
            color="text.secondary"
            fontWeight={600}
            mt={0.5}
          >
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default React.memo(StatsBar);
