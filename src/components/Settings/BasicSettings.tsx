import React, { useMemo } from 'react';
import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import { ProfileType } from '../../types/types';
import SettingsForm, { SettingsFormValues } from './SettingsForm';
import Stack from '@mui/material/Stack';

type PropsType = {
  selectAvatar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentUserProfile: ProfileType | null;
  handleSubmit: (data: SettingsFormValues) => void;
  isMobile: boolean;
};

const BasicSettings: React.FC<PropsType> = ({
  currentUserProfile,
  selectAvatar,
  handleSubmit,
  isMobile,
}) => {
  const initialValues = useMemo<SettingsFormValues | null>(() => {
    if (!currentUserProfile) {
      return null;
    }

    const {
      fullName,
      lookingForAJobDescription,
      lookingForAJob,
      aboutMe,
      contacts: { website, youtube, vk, twitter, github, facebook, instagram, mainLink },
    } = currentUserProfile;

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
      mainLink,
    };
  }, [currentUserProfile]);
  return (
    <Paper
      sx={{
        boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: { xs: 3, sm: 4 },
        border: '1px solid rgba(226, 232, 240, 0.8)',
        bgcolor: '#fff',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 12px 40px rgba(15, 23, 42, 0.1)',
        },
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={3}>
          <Box sx={{ position: { md: 'sticky' }, top: 24 }}>
            <Typography
              fontSize={{ xs: '1.25rem', sm: '1.5rem' }}
              fontWeight={800}
              letterSpacing="-0.02em"
              color="#1e293b"
            >
              Basic details
            </Typography>
            <Typography
              fontSize="0.875rem"
              color="#64748b"
              mt={0.5}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              Your photo and personal info
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={0.001}
          sx={{
            display: { xs: 'none', md: 'block' },
            borderLeft: '1px solid rgba(226, 232, 240, 0.8)',
          }}
        />
        <Grid item xs={12} md={8.9}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
          >
            <IconButton
              sx={{
                width: 96,
                height: 96,
                p: 0,
                '&:hover .avatar-overlay': { opacity: 1 },
              }}
              aria-label="upload picture"
              component="label"
            >
              <input onChange={selectAvatar} hidden accept="image/*" type="file" />
              <Box sx={{ position: 'relative', width: 96, height: 96 }}>
                <Avatar
                  src={currentUserProfile?.photos?.large}
                  sx={{
                    width: 96,
                    height: 96,
                    border: '3px solid #fff',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.12)',
                  }}
                />
                <Box
                  className="avatar-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    bgcolor: 'rgba(15, 23, 42, 0.55)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                  }}
                >
                  <LocalSeeOutlinedIcon sx={{ color: '#fff', fontSize: 22 }} />
                  <Typography fontSize="0.7rem" fontWeight={600} color="#fff" mt={0.3}>
                    Change
                  </Typography>
                </Box>
              </Box>
            </IconButton>
            <Box>
              <Typography fontWeight={700} color="#1e293b" fontSize="0.95rem">
                Profile photo
              </Typography>
              <Typography fontSize="0.8rem" color="#94a3b8" mt={0.3}>
                JPG or PNG, at least 400×400px
              </Typography>
            </Box>
          </Stack>
          <Box mt={4}>
            <SettingsForm
              isMobile={isMobile}
              initialValues={initialValues}
              handleSubmit={handleSubmit}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default React.memo(BasicSettings);
