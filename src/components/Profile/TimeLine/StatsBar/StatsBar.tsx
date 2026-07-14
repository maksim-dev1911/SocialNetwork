import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

type PropsType = {
  totalFriendsCount: number;
  totalPostsCount: number;
};

const StatsBar: React.FC<PropsType> = ({ totalFriendsCount, totalPostsCount }) => {
  const statsBarItems = [
    { title: 'Publications', item: `${totalPostsCount}` },
    { title: 'Friends', item: `${totalFriendsCount}` },
    { title: 'Subscribers', item: 0 },
  ];

  return (
    <Box
      display="flex"
      justifyContent={{ xs: 'center', sm: 'flex-start' }}
      gap={{ xs: 2, sm: 4 }}
      ml={{ xs: 0, sm: 3 }}
      mt={4}
      flexWrap="wrap"
      px={{ xs: 2, sm: 0 }}
    >
      {statsBarItems.map((item, index) => (
        <Box display="flex" gap={{ xs: 2, sm: 4 }} textAlign="center" key={index}>
          <div>
            <Typography fontSize="14px" fontWeight={600}>
              {item.item}
            </Typography>
            <Typography fontSize="14px" color="gray">
              {item.title}
            </Typography>
          </div>
          {index < statsBarItems.length - 1 && <Divider orientation="vertical" flexItem />}
        </Box>
      ))}
    </Box>
  );
};

export default React.memo(StatsBar);
