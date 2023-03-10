import React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Link from '../../Common/Link/Link';
import {useAppSelector} from "../../../hooks/redux";
import {currentUserIdSelector} from "../../../store/auth/auth.selectors";

type PropsType = {
    image: string
    description?: string
    title: string
    clearError?: () => void
}

const ErrorLayout: React.FC<PropsType> = ({image, description, title, clearError}) => {
    const userId = useAppSelector(currentUserIdSelector);

    return (
        <Box p={{xs: 3, sm: 10}} textAlign='center' sx={{backgroundColor: '#fff'}}>
            <img src={image} alt='404'/>
            <Typography sx={{fontSize: '34px', fontWeight: 'bold', pt: 4}}>{title}</Typography>
            <Typography sx={{color: 'rgb(54, 65, 82)', pt: 2}}>{description}</Typography>
            <Button
                component={Link}
                onClick={clearError}
                to={`profile/${userId}`}
                startIcon={<HomeOutlinedIcon/>} variant='contained' sx={{mt: 4}}>Home</Button>
        </Box>
    );
};

export default React.memo(ErrorLayout);