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
      <Box display="flex" alignItems="center" p={2.5}>
        <Avatar src={profile?.photos?.large || userImg} sx={{ mr: 2 }} />
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
      <CreatePostActions
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        onPhotoChange={setSelectedPhoto}
      />
    </Box>
  );
};

export default React.memo(CreatePostCard);
