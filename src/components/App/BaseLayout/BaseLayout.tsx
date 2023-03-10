import React, {useCallback, useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import {Container, CssBaseline, Theme, useMediaQuery} from "@mui/material";

import Header from "../../SideBar/Header/Header";
import SideBar from "../../SideBar/SideBar";
import {Outlet, useNavigate} from "react-router-dom";
import sx from './BaseLayout.style';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getCurrentUserProfile, signUp} from "../../../store/auth/auth.thunks";
import {
    currentUserIdSelector,
    currentUserProfileSelector, currentUserSelector,
} from "../../../store/auth/auth.selectors";
import Modal from "../../Common/Modal/Modal";

const BaseLayout = () => {
    const userId = useAppSelector(currentUserIdSelector);
    const currentUserProfile = useAppSelector(currentUserProfileSelector);
    const userMe = useAppSelector(currentUserSelector);
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [isModalOpen, setOpenModal] = useState(false);

    const openModal = () => setOpenModal(true);
    const closeModal = () => setOpenModal(false);

    useEffect(() => {
        dispatch(getCurrentUserProfile(userId))
    }, [userId])

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, [])

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [])

    const handleLogout = useCallback(() => {
        dispatch(signUp())
        navigate('login')
    }, [dispatch])

    const renderModal = () => (
        <Modal fnToAccept={handleLogout} openModal={isModalOpen} closeModal={closeModal}/>
    )

    return (
        <Container maxWidth={false} disableGutters>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Header openModal={openModal} currentUserProfile={currentUserProfile} open={open} setOpen={handleOpen}/>
                <SideBar isMobile={isMobile} userMe={userMe} profile={currentUserProfile} userId={userId} setClose={handleClose} open={open}/>
                {renderModal()}
                <Box sx={sx.content}>
                    <Container sx={sx.container}>
                        <Outlet/>
                    </Container>
                </Box>
            </Box>
        </Container>
    );
}

export default React.memo(BaseLayout);