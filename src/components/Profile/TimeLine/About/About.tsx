import React from 'react';

import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

import { ProfileType } from '../../../../types/types';

import sx from '../TimeLine.style';



type PropsType = {

  profile: ProfileType | null;

};



const About: React.FC<PropsType> = ({ profile }) => {

  const items = [

    {

      icon: FavoriteBorderOutlinedIcon,

      title: 'About',

      description: profile?.aboutMe || 'No bio yet',

    },

    {

      icon: WorkHistoryOutlinedIcon,

      title: 'Job status',

      description: profile?.lookingForAJob ? 'Looking for a job' : 'Not looking for a job',

    },

    {

      icon: WorkOutlineOutlinedIcon,

      title: 'Details',

      description: profile?.lookingForAJobDescription || '—',

    },

  ];



  return (

    <Box mb={2} sx={sx.cardWrapper}>

      <Typography fontWeight={800} letterSpacing="-0.02em" fontSize={16} color="#1e293b">
        About me
      </Typography>

      <Box mt={2} display="flex" flexDirection="column" gap={1.5}>

        {items.map((item) => (

          <Box key={item.title} display="flex" gap={1.25} alignItems="flex-start">

            <Box

              sx={{

                width: 34,

                height: 34,

                borderRadius: '10px',

                display: 'grid',

                placeItems: 'center',

                bgcolor: 'rgba(88, 80, 236, 0.08)',

                color: 'primary.main',

                flexShrink: 0,

              }}

            >

              <item.icon fontSize="small" />

            </Box>

            <Box minWidth={0}>

              <Typography fontSize={12} fontWeight={700} color="text.secondary" mb={0.25}>

                {item.title}

              </Typography>

              <Typography

                fontSize={14}

                fontWeight={550}

                color="text.primary"

                sx={{ wordBreak: 'break-word' }}

              >

                {item.description}

              </Typography>

            </Box>

          </Box>

        ))}

      </Box>

    </Box>

  );

};



export default React.memo(About);

