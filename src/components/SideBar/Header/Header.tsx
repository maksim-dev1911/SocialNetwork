import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import UserMenu from './UserMenu/UserMenu/UserMenu';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { ProfileType } from '../../../types/types';

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
    <AppBar
      elevation={0}
      sx={{
        bgcolor: 'white',
        boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.06)',
      }}
      position="fixed"
      open={open}
      isMobile={isMobile}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 0.5, sm: 2 }, pl: { xs: 0.5, sm: 2 } }}>
        <IconButton
          color="default"
          onClick={setOpen}
          edge="start"
          sx={{
            marginLeft: { xs: 0, sm: 0 },
            marginRight: { xs: 1, sm: 5 },
            ...(!isMobile && open && { visibility: 'hidden' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <UserMenu openModal={openModal} currentUserProfile={currentUserProfile} />
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
