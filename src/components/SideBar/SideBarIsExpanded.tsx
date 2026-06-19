import React from 'react';
import logoImg from '../../images/logo.png';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import Divider from '@mui/material/Divider';
import Link from '../Common/Link/Link';
import sx from './SideBar.style';
import Box from '@mui/material/Box';
import UserInfo from '../Common/UserInfo/UserInfo';
import { IUser, ProfileType } from '../../types/types';
import NavBar from '../NavBar/NavBar';


type PropsType = {
  setClose?: () => void
  userId?: number
  profile: ProfileType | null
  isMobile?: boolean
  userMe: IUser | null
}

const SideBarIsExpanded: React.FC<PropsType> = ({ setClose, userId, profile, isMobile, userMe }) => {
  return (
    <Box width={300} height={800}>
      <Box display='flex' p='20px' justifyContent='space-between' alignItems='center'>
        <img alt='logo' src={logoImg} />
        <IconButton onClick={setClose}>
          <KeyboardDoubleArrowRightOutlinedIcon />
        </IconButton>
      </Box>
      <Divider />
      <Divider sx={sx.generalDivider} textAlign='left'>GENERAL</Divider>
      <Box p={1} display='flex' flexDirection='column' height='100%'>
        <Box mr='1px'>
          <NavBar userId={userId} variant='default' />
        </Box>
        <Box sx={sx.wrapperUserInfo}>
          <UserInfo profile={profile} />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(SideBarIsExpanded);