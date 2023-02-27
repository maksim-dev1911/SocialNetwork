import React, {useMemo} from 'react';
import {Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import {ProfileType} from "../../types/types";
import sx from "./Settings.style";
import Tooltip from "@mui/material/Tooltip";
import SettingsForm, {SettingsFormValues} from "./SettingsForm";

type PropsType = {
    selectAvatar: (e: React.ChangeEvent<HTMLInputElement>) => void
    currentUserProfile: ProfileType | null
    handleSubmit: (data: SettingsFormValues) => void
}

const BasicSettings: React.FC<PropsType> = ({currentUserProfile, selectAvatar, handleSubmit}) => {
    const initialValues = useMemo<SettingsFormValues | null>(() => {
        if (!currentUserProfile) {
            return null
        }

        const {
            fullName,
            lookingForAJobDescription,
            lookingForAJob,
            aboutMe,
            contacts: {website, youtube, vk, twitter, github, facebook, instagram, mainLink}
        } = currentUserProfile

        return {
            fullName,
            lookingForAJobDescription,
            lookingForAJob,
            aboutMe,
            website,
            youtube,
            vk,
            twitter,
            github,
            facebook,
            instagram,
            mainLink
        }
    }, [currentUserProfile])
    return (
        <Paper sx={{boxShadow: "rgb(0 0 0 / 8%) 0px 1px 2px", p: 2, borderRadius: 3}}>

            <Grid container>
                <Grid item p={1} xs={3}>
                    <Typography fontSize='17px' variant='h6'>Basic details</Typography>
                </Grid>
                <Grid item p={1}>
                    <IconButton sx={{width: '90px', height: '90px'}} aria-label="upload picture" component="label">
                        <input onChange={selectAvatar} hidden accept="image/*" type="file"/>
                        <Box sx={sx.avatarContainer}>
                            <Avatar src={currentUserProfile?.photos?.large}
                                    sx={{width: 90, height: 90, position: 'relative'}}></Avatar>
                            <Tooltip title='Avatar upload'>
                                <Box sx={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                }}>
                                    <Typography sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: "300ms",
                                        borderRadius: "50%",
                                        color: "rgba(0,0,0, 0)",
                                        height: "100%",
                                        '&:hover': {
                                            background: "rgba(47, 55, 70, 0.5)",
                                            borderRadius: "50%",
                                            color: "white",
                                            transition: "300ms",
                                        }
                                    }}><LocalSeeOutlinedIcon sx={{mr: '2px'}}/>Select</Typography>
                                </Box>
                            </Tooltip>
                        </Box>
                    </IconButton>
                    <Box mt={3}>
                        <SettingsForm initialValues={initialValues} handleSubmit={handleSubmit}/>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default React.memo(BasicSettings);