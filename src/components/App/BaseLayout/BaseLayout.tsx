import React, {useState} from 'react';

import Box from '@mui/material/Box';
import {Container, CssBaseline} from "@mui/material";

import Header from "../../SideBar/Header/Header";
import SideBar from "../../SideBar/SideBar";
import {Outlet} from "react-router-dom";
import sx from './BaseLayout.style';

const BaseLayout = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth={false} disableGutters>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Header open={open} setOpen={handleOpen}/>
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