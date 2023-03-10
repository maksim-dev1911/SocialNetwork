import React from 'react';
import logoImg from "../../images/logo.png";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import Link from "../Common/Link/Link";
import sx from './SideBar.style';
import Box from "@mui/material/Box";
import UserInfo from "../Common/UserInfo/UserInfo";
import {IUser, ProfileType} from "../../types/types";
import NavBar from "../NavBar/NavBar";


type PropsType = {
    setClose?: () => void
    userId?: number
    profile: ProfileType | null
    isMobile?: boolean
    userMe: IUser | null
}

const SideBarIsExpanded: React.FC<PropsType> = ({setClose, userId, profile, isMobile, userMe}) => {
    return (
        <Box sx={{width: 240}}>
            <Box display='flex' p='10px' justifyContent='space-between'>
                <Link to={`/profile/${userId}`}>
                    <img alt='logo' src={logoImg}/>
                </Link>
                <IconButton onClick={setClose}>
                    <ChevronRightIcon/>
                </IconButton>
            </Box>
            <Divider/>
            <Divider sx={sx.generalDivider} textAlign='left'>GENERAL</Divider>
            <Box mr='1px'>
                <NavBar userId={userId} variant='default'/>
            </Box>
            <Box sx={sx.wrapperUserInfo}>
                <UserInfo userMe={userMe} profile={profile}/>
            </Box>
        </Box>
    )
};

export default React.memo(SideBarIsExpanded);