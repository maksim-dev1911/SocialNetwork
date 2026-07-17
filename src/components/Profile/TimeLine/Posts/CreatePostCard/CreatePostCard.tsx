import React, { useState } from 'react';

import sx from '../../TimeLine.style';
import Avatar from '@mui/material/Avatar';
import userImg from '../../../../../images/user.jpg';
import Box from '@mui/material/Box';
import { ProfileType } from '../../../../../types/types';
import { PostFormDataType } from '../Posts';
import CreatePostActions from './CreatePostActions';
import TextSubmitInput from '../../../../Fields/SubmitInputField/TextSubmitInput';
import Typography from '@mui/material/Typography';

type PropsType = {
  profile: ProfileType | null;
  onPostCreate: (data: PostFormDataType) => void;
};

const CreatePostCard: React.FC<PropsType> = ({ profile, onPostCreate }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const handleSubmit = () => {
    setIsSubmitting(true);
    onPostCreate({ text, photo: selectedPhoto });

    setSelectedPhoto(null);
    setText('');
    setIsSubmitting(false);
  };

  return (
    <Box sx={sx.addPostWrapper}>
      <Box px={{ xs: 1.75, sm: 2.25 }} pt={2} pb={0.5}>
        <Typography fontWeight={600} fontSize={15} letterSpacing="-0.01em" color="text.primary">
          Create post
        </Typography>
      </Box>

      <Box
        display="flex"
        alignItems="flex-start"
        p={{ xs: 1.5, sm: 2.25 }}
        pt={1.5}
        sx={{ minWidth: 0 }}
      >
        <Avatar
          src={profile?.photos?.large || userImg}
          sx={{
            mr: { xs: 1.25, sm: 1.75 },
            flexShrink: 0,
            width: 44,
            height: 44,
            boxShadow: '0 4px 12px rgba(15,23,42,0.12)',
          }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <TextSubmitInput
            text={text}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            onChange={setText}
            photo={selectedPhoto}
            sxInput={sx.addPostInput}
            placeholder="Share your thoughts..."
          />
        </Box>
      </Box>

      <CreatePostActions
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        onPhotoChange={setSelectedPhoto}
      />
    </Box>
  );
};

export default React.memo(CreatePostCard);
