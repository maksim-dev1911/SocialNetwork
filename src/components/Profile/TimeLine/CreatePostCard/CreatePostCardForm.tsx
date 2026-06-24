import React from 'react';
import { PostFormDataType } from '../Posts/Posts';
import Box from '@mui/material/Box';
import TextFieldControlled from '../../../Fields/TextFieldControlled/TextFieldControlled';
import sx from '../TimeLine.style';
import LoadingButton from '@mui/lab/LoadingButton';
import { Form } from 'react-final-form';
import { FormApi } from 'final-form';

type PropsType = {
  onPostCreate: (data: PostFormDataType) => void;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<File | null>>;
  photoInputRef: React.RefObject<HTMLInputElement>;
  formRef: React.MutableRefObject<FormApi<PostFormDataType> | null>;
  profileName?: string;
};

const CreatePostCardForm: React.FC<PropsType> = ({
  onPostCreate,
  formRef,
  profileName,
  setSelectedPhoto,
  photoInputRef,
}) => {
  return (
    <>
      <Form<PostFormDataType>
        onSubmit={(values, form) => {
          onPostCreate(values);

          form.reset();

          setSelectedPhoto(null);

          if (photoInputRef.current) {
            photoInputRef.current.value = '';
          }
        }}
        render={({ handleSubmit, submitting, form, values }) => {
          const isDisabled = !values.text?.trim() && !values.photo;
          formRef.current = form;

          return (
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>
              <Box display="flex" alignItems="center" gap={2}>
                <TextFieldControlled
                  type="input"
                  name="text"
                  size="small"
                  sx={sx.addPostInput}
                  placeholder={`What's new with you, ${profileName}?`}
                />
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (!file) return;

                    setSelectedPhoto(file);
                    form.change('photo', file);
                  }}
                />
                <LoadingButton
                  disabled={submitting || isDisabled}
                  loading={submitting}
                  variant="contained"
                  size="medium"
                  type="submit"
                  sx={{
                    borderRadius: '999px',
                    px: 3,
                    minWidth: 100,
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: 'none',
                  }}
                >
                  Post
                </LoadingButton>
              </Box>
            </form>
          );
        }}
      />
    </>
  );
};

export default React.memo(CreatePostCardForm);
