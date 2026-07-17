import React from 'react';
import profileCoverImg from '../../../images/profile-cover.jpg';
import userImg from '../../../images/user.jpg';
import sx from './UserProfile.style';
import Box from '@mui/material/Box';
import { IconButton, Link as LinkUI, Typography, Avatar as MuiAvatar } from '@mui/material';
import { IUser, ProfileType } from '../../../types/types';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
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

const UserProfile: React.FC<PropsType> = ({
  profile,
  totalFriendsCount,
  currentUser,
  totalPostsCount,
}) => {
  const linkItem = [
    { icon: InstagramIcon, path: profile?.contacts.instagram },
    { icon: FacebookIcon, path: profile?.contacts.facebook },
    { icon: GitHubIcon, path: profile?.contacts.github },
    { icon: PublicIcon, path: profile?.contacts.mainLink },
    { icon: TwitterIcon, path: profile?.contacts.twitter },
    { icon: YouTubeIcon, path: profile?.contacts.youtube },
    { icon: LanguageIcon, path: profile?.contacts.vk },
  ];

  const filtered = linkItem.filter((link) => {
    const path = link.path?.trim();
    return Boolean(path) && path !== 'null' && path !== 'undefined';
  });

  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.banner}>
        <img src={profileCoverImg} alt="profile cover" />
        <Box sx={sx.bannerOverlay} />
        {filtered.length > 0 && (
          <Box sx={sx.socialRow}>
            {filtered.map((link) => (
              <IconButton
                key={link.path}
                component={LinkUI}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                sx={sx.socialBtn}
                size="small"
              >
                <link.icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        )}
      </Box>

      <Box sx={sx.body}>
        <MuiAvatar src={profile?.photos?.large || userImg} alt="avatar" sx={sx.avatar} />

        <Box sx={sx.identity}>
          <Typography sx={sx.userName}>{profile?.fullName}</Typography>
          {currentUser?.email && <Typography sx={sx.meta}>{currentUser.email}</Typography>}
        </Box>

        <Box sx={sx.actions}>
          <Button
            component={Link}
            to="/settings"
            startIcon={<ManageAccountsIcon />}
            variant="outlined"
            size="small"
            sx={sx.editBtn}
          >
            Edit profile
          </Button>
        </Box>

        <StatsBar totalFriendsCount={totalFriendsCount} totalPostsCount={totalPostsCount} />
      </Box>
    </Box>
  );
};

export default React.memo(UserProfile);
