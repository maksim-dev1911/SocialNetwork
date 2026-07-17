import React from 'react';
import { SxProps, TextField, Theme } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import sx from '../../Profile/TimeLine/TimeLine.style';

type PropsType = {
  text: string;
  photo?: File | null;
  onChange: (text: string) => void;
  placeholder?: string;
  isSubmitting?: boolean;
  handleSubmit: () => void;
  sxInput?: SxProps<Theme>;
};

const TextSubmitInput: React.FC<PropsType> = ({
  text,
  photo,
  onChange,
  placeholder,
  isSubmitting,
  handleSubmit,
  sxInput,
}) => {
  const isDisabled = !text?.trim() && !photo;

  return (
    <Box display="flex" alignItems="center" gap={2} width="100%">
      <TextField
        minRows={3}
        maxRows={8}
        multiline
        name="text"
        value={text}
        size="small"
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
        sx={sxInput}
        placeholder={placeholder}
      />
      <LoadingButton
        variant="contained"
        size="medium"
        type="submit"
        loading={isSubmitting}
        disabled={isDisabled}
        onClick={() => handleSubmit()}
        sx={sx.loadingButton}
      >
        Post
      </LoadingButton>
    </Box>
  );
};

export default React.memo(TextSubmitInput);
