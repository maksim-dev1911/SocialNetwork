import React from 'react';
import logoImg from '../../images/logo.png';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import Divider from '@mui/material/Divider';
import sx from './SideBar.style';
import Box from '@mui/material/Box';
import UserInfo from '../Common/UserInfo/UserInfo';
import { IUser, ProfileType } from '../../types/types';
import NavBar from '../NavBar/NavBar';

type PropsType = {
  setClose?: () => void;
  userId?: number;
  profile: ProfileType | null;
  isMobile?: boolean;
  userMe: IUser | null;
};

const SideBarIsExpanded: React.FC<PropsType> = ({ setClose, userId, profile, isMobile }) => {
  return (
    <Box width={300} sx={{ height: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box display="flex" p="20px" justifyContent="space-between" alignItems="center">
        <img alt="logo" src={logoImg} />
        <IconButton onClick={setClose}>
          <KeyboardDoubleArrowRightOutlinedIcon />
        </IconButton>
      </Box>
      <Divider />
      <Divider sx={sx.generalDivider} textAlign="left">
        GENERAL
      </Divider>
      <Box p={1} display="flex" flexDirection="column" flexGrow={1} position="relative">
        <Box mr="1px">
          <NavBar userId={userId} variant="default" onNavigate={isMobile ? setClose : undefined} />
        </Box>
        <Box sx={sx.wrapperUserInfo}>
          <UserInfo profile={profile} />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(SideBarIsExpanded);
