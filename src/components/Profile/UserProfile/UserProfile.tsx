import React from 'react';
import profileCoverImg from '../../../images/profile-cover.jpg';
import userImg from '../../../images/user.jpg';
import sx, { Avatar, Banner } from './UserProfile.style';
import Box from '@mui/material/Box';
import { Link as LinkUI, Typography } from '@mui/material';
import { IUser, ProfileType } from '../../../types/types';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import StatsBar from '../TimeLine/StatsBar/StatsBar';

type PropsType = {
  profile: ProfileType | null;
  isMobile: boolean;
  totalFriendsCount: number;
  totalPostsCount: number;
  currentUser: IUser | null;
};

const UserProfile: React.FC<PropsType> = ({ profile, isMobile, totalFriendsCount, currentUser, totalPostsCount }) => {
  const linkItem = [
    {
      icon: InstagramIcon,
      path: `${profile?.contacts.instagram}`,
    },
    {
      icon: FacebookIcon,
      path: `${profile?.contacts.facebook}`,
    },
    {
      icon: GitHubIcon,
      path: `${profile?.contacts.github}`,
    },
    {
      icon: PublicIcon,
      path: `${profile?.contacts.mainLink}`,
    },
    {
      icon: TwitterIcon,
      path: `${profile?.contacts.twitter}`,
    },
    {
      icon: YouTubeIcon,
      path: `${profile?.contacts.youtube}`,
    },
    {
      icon: LanguageIcon,
      path: `${profile?.contacts.vk}`,
    },
  ];

  const filtered = linkItem.filter((link) => link.path !== 'null' || '');

  return (
    <Box sx={sx.wrapper}>
      <Box sx={{ position: 'relative' }}>
        <Banner>
          <img src={profileCoverImg} />
          <Avatar>
            <img src={profile?.photos?.large || userImg} />
          </Avatar>
        </Banner>
        <Box sx={{ position: 'absolute', right: 0, bottom: 0 }}>
          <List sx={isMobile ? sx.mobileContainer : sx.desktopContainer}>
            {filtered.map((link) => {
              return (
                <ListItem disablePadding>
                  <LinkUI href={link.path} sx={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{ p: 0 }}>
                      <ListItemIcon sx={isMobile ? sx.mobileIcon : sx.desktopIcon}>
                        <link.icon fontSize='medium' sx={{ color: '#fff' }} />
                      </ListItemIcon>
                    </ListItemButton>
                  </LinkUI>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' position='relative' width='100%' mt={10}>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography sx={sx.userName}>{profile?.fullName}</Typography>
          <Typography fontSize='13px' color='#89919E'>{currentUser?.email}</Typography>
        </Box>
        <Box position='absolute' right='20px' alignItems='center'>
          <Link to='/settings'>
            <Button startIcon={<ManageAccountsIcon />} color='info' variant='outlined' size='small'>EDIT
              PROFILE</Button>
          </Link>
        </Box>
      </Box>
      <StatsBar totalFriendsCount={totalFriendsCount} totalPostsCount={totalPostsCount}/>
    </Box>
  );
};

export default React.memo(UserProfile);
