import React from 'react';
import {CircularProgress, Stack, SxProps, Theme} from "@mui/material";

type PropsType = {
    sx: SxProps<Theme> | undefined
}

const Preloader: React.FC<PropsType> = ({sx}) => {
    return (
        <Stack sx={sx}>
            <CircularProgress sx={{color: '#6252CE'}} size={50}/>
        </Stack>
    );
};

export default React.memo(Preloader);