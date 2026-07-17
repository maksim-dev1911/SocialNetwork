import React from 'react';

import Box from '@mui/material/Box';

import { Avatar, sx } from './User.style';

import userAvatar from '../../../images/user.jpg';

import Typography from '@mui/material/Typography';

import { UserType } from '../../../types/types';

import LoadingButton from '@mui/lab/LoadingButton';

import Link from '../../Common/Link/Link';

import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';



type PropsType = {

  user: UserType;

  follow: (id: number) => void;

  unfollow: (id: number) => void;

  isLoading: number[];

  isSm: boolean;

};



const User: React.FC<PropsType> = ({ user, follow, unfollow, isLoading, isSm }) => {

  return (

    <Box sx={!isSm ? sx.wrapper : sx.wrapperMobile}>

      <Box sx={!isSm ? sx.userWrapper : null}>

        <Avatar>

          <Link to={'/profile/' + user.id}>

            <img src={user.photos.large || userAvatar} alt="userAvatar" />

          </Link>

        </Avatar>

        <Box sx={!isSm ? sx.userInfo : sx.userInfoMobile}>

          <Link to={'/profile/' + user.id} sx={{ textDecoration: 'none' }}>

            <Typography

              variant="body1"

              fontSize="19px"

              fontWeight={700}

              color="#111827"

              lineHeight={1.2}

            >

              {user.name}

            </Typography>

          </Link>

          <Typography fontSize="15px" fontWeight={400} color="#9CA3AF" lineHeight={1.3}>

            {user.status}

          </Typography>

        </Box>

      </Box>

      <div style={{ width: isSm ? '100%' : 'auto' }}>

        {user.followed ? (

          <LoadingButton

            loading={isLoading.some((id) => id === user.id)}

            variant="outlined"

            startIcon={<PersonRemoveOutlinedIcon />}

            sx={sx.buttonStyle}

            onClick={() => {

              unfollow(user.id);

            }}

          >

            Remove Friend

          </LoadingButton>

        ) : (

          <LoadingButton

            loading={isLoading.some((id) => id === user.id)}

            startIcon={<PersonRemoveOutlinedIcon />}

            variant="outlined"

            sx={sx.buttonStyle}

            onClick={() => {

              follow(user.id);

            }}

          >

            Add friend

          </LoadingButton>

        )}

      </div>

    </Box>

  );

};



export default React.memo(User);

