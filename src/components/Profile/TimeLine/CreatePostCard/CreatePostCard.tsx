import React, { useRef, useState } from 'react';

import sx from '../TimeLine.style';
import Avatar from '@mui/material/Avatar';
import userImg from '../../../../images/user.jpg';
import Box from '@mui/material/Box';
import { ProfileType } from '../../../../types/types';
import { PostFormDataType } from '../Posts/Posts';
import { FormApi } from 'final-form';
import CreatePostCardForm from './CreatePostCardForm';
import CreatePostActions from './CreatePostActions';

type PropsType = {
  profile: ProfileType | null;
  onPostCreate: (data: PostFormDataType) => void;
};

const CreatePostCard: React.FC<PropsType> = ({ profile, onPostCreate }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormApi<PostFormDataType> | null>(null);

  return (
    <Box sx={sx.addPostWrapper}>
      <Box display="flex" alignItems="center" p={2.5}>
        <Avatar src={profile?.photos?.large || userImg} sx={{ mr: 2 }} />
        <CreatePostCardForm
          onPostCreate={onPostCreate}
          formRef={formRef}
          photoInputRef={photoInputRef}
          setSelectedPhoto={setSelectedPhoto}
          profileName={profile?.fullName}
        />
      </Box>
      <CreatePostActions
        selectedPhoto={selectedPhoto}
        photoInputRef={photoInputRef}
        setSelectedPhoto={setSelectedPhoto}
        formRef={formRef}
      />
    </Box>
  );
};

export default React.memo(CreatePostCard);
