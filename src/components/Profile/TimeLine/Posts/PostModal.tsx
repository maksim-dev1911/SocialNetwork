import React from 'react';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import TextFieldControlled from '../../../Fields/TextFieldControlled/TextFieldControlled';
import { Form } from 'react-final-form';
import { ProfileType } from '../../../../types/types';
import LoadingButton from '@mui/lab/LoadingButton';
import { PostFormDataType } from './Posts';
import Tooltip from '@mui/material/Tooltip';
import FilePickerFieldControlled from '../../../Fields/FilePickerFieldControlled';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 660,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
};

type PropsType = {
  fnToAccept?: () => void;
  profile: ProfileType | null;
  handleSubmitCreatePost: (data: PostFormDataType) => void;
};

const PostModal: React.FC<PropsType> = ({ fnToAccept, profile, handleSubmitCreatePost }) => {
  return (
    <div>
      <Box sx={style}>
        <Box>
          <Typography p={2} textAlign="center" fontFamily="Inter" fontWeight="600">
            Create Post
          </Typography>
        </Box>
        <Divider />
        <Box p={2} mt={1} display="flex">
          <Avatar src={profile?.photos?.large} sx={{ mr: 2 }} />
          <Form
            onSubmit={() => {}}
            render={({ handleSubmit, submitting }) => {
              return (
                <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                  <TextFieldControlled
                    type="input"
                    name="text"
                    sx={{ width: '100%' }}
                    multiline
                    minRows={8}
                    placeholder={`What's Your Mind ? ${profile?.fullName}`}
                  />
                  <Box
                    sx={{
                      backgroundColor: 'rgb(249,250,251)',
                      p: 2,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      display: 'flex',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      borderRadius: 2,
                      mt: 2,
                    }}
                  >
                    <Typography color="#666666">Add to your post</Typography>
                    <Tooltip title="Photo">
                      <></>
                    </Tooltip>
                  </Box>
                  <Box p={2} textAlign="right">
                    <LoadingButton
                      disabled={submitting}
                      loading={submitting}
                      variant="contained"
                      size="medium"
                      type="submit"
                    >
                      Share
                    </LoadingButton>
                    <Button sx={{ ml: 1 }} size="medium" variant="contained">
                      Cancel
                    </Button>
                  </Box>
                </form>
              );
            }}
          />
        </Box>
        <Divider />
      </Box>
    </div>
  );
};

export default React.memo(PostModal);
