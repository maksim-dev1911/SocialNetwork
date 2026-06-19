import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ListItem from '@mui/material/ListItem';
import Link from '../Common/Link/Link';
import ListItemButton from '@mui/material/ListItemButton';
import sx from '../SideBar/SideBar.style';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

type PropsType = {
  userId?: number;
  variant?: 'default' | 'small';
};

const NavBar: React.FC<PropsType> = ({ userId }) => {
  const linkItem = [
    {
      title: 'Profile',
      icon: HomeOutlinedIcon,
      path: `/profile/${userId}`,
    },
    {
      title: 'Chat',
      icon: ForumOutlinedIcon,
      path: '/chat',
    },
    {
      title: 'People',
      icon: PeopleAltOutlinedIcon,
      path: '/people',
    },
  ];

  return (
    <div>
      <List sx={{ p: 0 }}>
        {linkItem.map((link) => (
          <ListItem key={link.title} disablePadding sx={{ display: 'block', mb: '3px'}}>
            <Link sx={{ textDecoration: 'none' }} key={link.title} to={link.path}>
              {({ isActive }) => (
                <ListItemButton sx={isActive ? sx.buttonActive : sx.button}>
                  <ListItemIcon sx={{ minWidth: '18px', mr: 3, ml: 0.5,  p: '8px 0'}}>
                    <link.icon fontSize='medium' color={isActive ? 'primary' : undefined} />
                  </ListItemIcon>
                  <Typography
                    fontFamily='Inter'
                    color={isActive ? '' : '#5F6B85'}
                    variant='body2'
                  >
                    {link.title}
                  </Typography>
                </ListItemButton>
              )}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default React.memo(NavBar);
