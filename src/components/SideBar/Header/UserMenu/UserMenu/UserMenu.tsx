import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {ProfileType} from "../../../../../types/types";
import {Link, useNavigate} from "react-router-dom";

type PropsType = {
    currentUserProfile?: ProfileType | null
    openModal: () => void
}

const AccountMenu: React.FC<PropsType> = ({currentUserProfile, openModal}) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const redirectToProfile = () => {
        navigate('profile')
    }

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={currentUserProfile?.photos?.large}
                                sx={{width: 40, height: 40}}>{currentUserProfile?.fullName}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        'a': {
                            textDecoration: "none",
                            color: '#666666DE',
                        },
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={redirectToProfile}>
                    <Avatar src={currentUserProfile?.photos?.large}
                            sx={{width: 40, height: 40}}/> {currentUserProfile?.fullName}
                </MenuItem>
                <Divider sx={{borderStyle: "dashed"}}/>
                <Link to='settings'>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                        <Typography sx={{color: "#666666DE"}}>Settings</Typography>
                    </MenuItem>
                </Link>
                <MenuItem onClick={openModal}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    <Typography sx={{color: "#666666DE"}}>Logout</Typography>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default React.memo(AccountMenu);