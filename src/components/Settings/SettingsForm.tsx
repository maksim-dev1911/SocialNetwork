import React from 'react';
import { Field, Form } from 'react-final-form';
import TextFieldControlled from '../Fields/TextFieldControlled/TextFieldControlled';
import { Box, Collapse, Grid, InputAdornment, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import CheckBoxControlled from '../Fields/CheckBoxControlled/CheckBoxControlled';
import Validators from '../../services/validators';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import sx from './Settings.style';

export type SettingsFormValues = {
  fullName: string;
  aboutMe: string;
  lookingForAJobDescription: string;
  lookingForAJob: boolean;
  facebook: string;
  github: string;
  instagram: string;
  mainLink: string;
  vk: string;
  youtube: string;
  website: string;
  twitter: string;
};

type PropsType = {
  handleSubmit: (data: SettingsFormValues) => void;
  initialValues: SettingsFormValues | null;
  isMobile: boolean;
};

const SettingsForm: React.FC<PropsType> = ({ handleSubmit, initialValues, isMobile }) => {
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <TextFieldControlled
                type="text"
                name="fullName"
                label="Full Name"
                size="small"
                validate={Validators.required}
              />

              <Box sx={{ mt: 4, mb: 2, pt: 3, borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: '#1e293b',
                  }}
                >
                  About me
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', mt: 0.3 }}>
                  A short intro others will see on your profile
                </Typography>
              </Box>

              <Stack spacing={2}>
                <TextFieldControlled
                  type="text"
                  name="aboutMe"
                  label="About me"
                  size="medium"
                  multiline
                  minRows={3}
                  sx={!isMobile ? sx.fieldStyle : null}
                  validate={Validators.required}
                />

                <Box
                  sx={{
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    borderRadius: '12px',
                    p: 2,
                    bgcolor: 'rgba(248, 250, 252, 0.6)',
                  }}
                >
                  <CheckBoxControlled
                    name="lookingForAJob"
                    type="checkbox"
                    label="I'm looking for a job"
                    sx={{ m: 0 }}
                  />

                  <Field name="lookingForAJob" subscription={{ value: true }}>
                    {({ input: { value: isLookingForAJob } }) => (
                      <Collapse in={!!isLookingForAJob} timeout={200} unmountOnExit>
                        <TextFieldControlled
                          type="text"
                          name="lookingForAJobDescription"
                          label="What kind of role are you looking for?"
                          size="medium"
                          fullWidth
                          multiline
                          minRows={2}
                          sx={{ mt: 2 }}
                          validate={Validators.required}
                        />
                      </Collapse>
                    )}
                  </Field>
                </Box>
              </Stack>
              <Box sx={{ mt: 4, mb: 2, pt: 3, borderTop: '1px solid rgba(226, 232, 240, 0.8)' }}>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: '#1e293b',
                  }}
                >
                  Contacts
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', mt: 0.3 }}>
                  Add links so people can find you elsewhere
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {[
                  {
                    name: 'facebook',
                    label: 'Facebook',
                    icon: <FacebookIcon sx={{ fontSize: 18, color: '#94a3b8' }} />,
                  },
                  {
                    name: 'instagram',
                    label: 'Instagram',
                    icon: <InstagramIcon sx={{ fontSize: 18, color: '#94a3b8' }} />,
                  },
                  {
                    name: 'twitter',
                    label: 'Twitter',
                    icon: <TwitterIcon sx={{ fontSize: 18, color: '#94a3b8' }} />,
                  },
                  {
                    name: 'github',
                    label: 'GitHub',
                    icon: <GitHubIcon sx={{ fontSize: 18, color: '#94a3b8' }} />,
                  },
                  {
                    name: 'youtube',
                    label: 'YouTube',
                    icon: <YouTubeIcon sx={{ fontSize: 18, color: '#94a3b8' }} />,
                  },
                  {
                    name: 'vk',
                    label: 'VK',
                    icon: <PublicOutlinedIcon sx={{ fontSize: 18, color: '#94a3b8' }} />,
                  },
                ].map((field) => (
                  <Grid item xs={12} sm={6} key={field.name}>
                    <TextFieldControlled
                      type="text"
                      name={field.name}
                      label={field.label}
                      size="small"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">{field.icon}</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <TextFieldControlled
                    type="text"
                    name="mainLink"
                    label="Main link (website, portfolio, etc.)"
                    size="small"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LinkOutlinedIcon sx={{ fontSize: 18, color: '#94a3b8' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <LoadingButton
                disabled={submitting}
                loading={submitting}
                variant="contained"
                size="large"
                type="submit"
                fullWidth
                sx={{
                  mt: 4,
                  py: 1.5,
                  borderRadius: '12px',
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(88, 80, 236, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(88, 80, 236, 0.4)',
                  },
                }}
              >
                Save Changes
              </LoadingButton>
            </form>
          );
        }}
      />
    </div>
  );
};

export default SettingsForm;
