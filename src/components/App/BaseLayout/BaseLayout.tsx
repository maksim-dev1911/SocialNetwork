import React, {useCallback, useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import {Container, CssBaseline} from "@mui/material";

import Header from "../../SideBar/Header/Header";
import SideBar from "../../SideBar/SideBar";
import {Outlet, useNavigate} from "react-router-dom";
import sx from './BaseLayout.style';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getCurrentUserProfile, signUp} from "../../../store/auth/auth.thunks";
import {
    currentUserIdSelector,
    currentUserProfileSelector,
} from "../../../store/auth/auth.selectors";
import Modals from "../../Common/Modal/Modal";

const BaseLayout = () => {
    const userId = useAppSelector(currentUserIdSelector);
    const currentUserProfile = useAppSelector(currentUserProfileSelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [modal, setOpenModal] = useState(false);
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
        <Modals fnToAccept={handleLogout} modal={modal} closeModal={closeModal}/>
    )

    return (
        <Container maxWidth={false} disableGutters>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Header openModal={openModal} currentUserProfile={currentUserProfile} open={open} setOpen={handleOpen}/>
                <SideBar userId={userId} setClose={handleClose} open={open}/>
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