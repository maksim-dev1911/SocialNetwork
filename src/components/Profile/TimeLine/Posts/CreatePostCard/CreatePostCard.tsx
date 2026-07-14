import React, { useState } from 'react';

import sx from '../../TimeLine.style';
import Avatar from '@mui/material/Avatar';
import userImg from '../../../../../images/user.jpg';
import Box from '@mui/material/Box';
import { ProfileType } from '../../../../../types/types';
import { PostFormDataType } from '../Posts';
import CreatePostActions from './CreatePostActions';
import TextSubmitInput from '../../../../Fields/SubmitInputField/TextSubmitInput';

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
      <Box display="flex" alignItems="center" p={{ xs: 1.5, sm: 2.5 }} sx={{ minWidth: 0 }}>
        <Avatar src={profile?.photos?.large || userImg} sx={{ mr: { xs: 1, sm: 2 }, flexShrink: 0 }} />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <TextSubmitInput
            text={text}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            onChange={setText}
            photo={selectedPhoto}
            sxInput={sx.addPostInput}
            placeholder={`What's new with you, ${profile?.fullName}?`}
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
