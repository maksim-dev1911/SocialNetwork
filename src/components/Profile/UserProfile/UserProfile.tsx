import React from 'react';
import profileCoverImg from "../../../images/profile-cover.jpg";
import avatarImg from '../../../images/userAvatar.png';
import TabsMy from '../../Common/Tabs/Tabs';
import sx, {Avatar, Banner} from "./UserProfile.style";
import Box from "@mui/material/Box";
import {Link, Typography} from "@mui/material";
import {ProfileType} from "../../../types/types";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

type PropsType = {
    profile: ProfileType | null
    isMobile: boolean
}

const UserProfile: React.FC<PropsType> = ({profile, isMobile}) => {
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
    ]

    const filtered = linkItem.filter(link => link.path !== 'null' || '')

    return (
        <Box sx={sx.wrapper}>
            <Box sx={{position: 'relative'}}>
                <Banner>
                    <img src={profileCoverImg}/>
                    <Avatar>
                        <img src={profile?.photos?.large || avatarImg}/>
                    </Avatar>
                </Banner>
                <Box sx={{position: 'absolute', right: 0, bottom: 0}}>
                    <List sx={isMobile ? sx.mobileContainer : sx.desktopContainer}>
                        {filtered.map((link) => {
                            return (
                            <ListItem disablePadding>
                                <Link href={link.path} sx={{textDecoration: 'none'}}>
                                        <ListItemButton sx={{p: 0}}>
                                            <ListItemIcon sx={isMobile ? sx.mobileIcon : sx.desktopIcon}>
                                                <link.icon fontSize="medium" sx={{color: "#fff"}}/>
                                            </ListItemIcon>
                                        </ListItemButton>
                                </Link>
                            </ListItem>
                        )})}
                    </List>
                </Box>
            </Box>
            <Typography sx={sx.userName}>{profile?.fullName}</Typography>
            <div>
                <TabsMy/>
            </div>
        </Box>
    );
};

export default React.memo(UserProfile);