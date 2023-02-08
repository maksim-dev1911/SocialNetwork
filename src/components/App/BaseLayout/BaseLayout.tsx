import React, {useState} from 'react';

import Box from '@mui/material/Box';
import {Container, CssBaseline} from "@mui/material";

import Header from "../../SideBar/Header/Header";
import SideBar from "../../SideBar/SideBar";
import {Outlet} from "react-router-dom";
import sx from './BaseLayout.style';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {userProfileSelector} from "../../../store/profile/profile.selectors";
import {signUp} from "../../../store/auth/auth.thunks";
import {isAuthSelector} from "../../../store/auth/auth.selectors";

const BaseLayout = () => {
    const userProfile = useAppSelector(userProfileSelector);
    const isAuth = useAppSelector(isAuthSelector)
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        dispatch(signUp())
    }

    return (
        <Container maxWidth={false} disableGutters>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Header isAuth={isAuth} logout={handleLogout} userProfile={userProfile} open={open} setOpen={handleOpen}/>
                <SideBar setClose={handleClose} open={open}/>
                <Box sx={sx.content}>
                    <Container sx={sx.container} >
                        <Outlet/>
                    </Container>
                </Box>
            </Box>
        </Container>
    );
}

export default React.memo(BaseLayout);