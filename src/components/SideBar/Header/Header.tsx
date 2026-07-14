import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import UserMenu from './UserMenu/UserMenu/UserMenu';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { ProfileType } from '../../../types/types';
import Box from '@mui/material/Box';

const drawerWidth = 300;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  isMobile?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile',
})<AppBarProps>(({ theme, open, isMobile }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!isMobile &&
    open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

type PropsType = {
  open?: boolean;
  setOpen?: () => void;
  currentUserProfile?: ProfileType | null;
  openModal: () => void;
  isMobile?: boolean;
};

const Header: React.FC<PropsType> = ({
  setOpen,
  open,
  currentUserProfile,
  openModal,
  isMobile,
}) => {
  return (
    <AppBar elevation={0} sx={{ bgcolor: 'white' }} position="fixed" open={open} isMobile={isMobile}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
        <IconButton
          color="default"
          onClick={setOpen}
          edge="start"
          sx={{
            marginRight: { xs: 1, sm: 5 },
            ...(!isMobile && open && { visibility: 'hidden' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box display="flex">
          <Box display="flex" alignItems="center" gap={{ xs: 0.5, sm: 2 }}>
            <IconButton>
              <NotificationsOutlinedIcon sx={{ color: 'black' }} />
            </IconButton>
            <IconButton>
              <TextsmsOutlinedIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
          <UserMenu openModal={openModal} currentUserProfile={currentUserProfile} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
