import React from 'react';
import {CircularProgress, Stack} from "@mui/material";

const Preloader = () => {
    return (
        <Stack alignItems='center' position='absolute' top='50%' left={0} right={0}>
            <CircularProgress sx={{color: '#6252CE'}} size={50}/>
        </Stack>
    );
};

export default React.memo(Preloader);