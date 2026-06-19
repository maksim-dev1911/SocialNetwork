import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import PhotoIcon from '@mui/icons-material/Photo';
import IconButton from '@mui/material/IconButton';

export type FilePickerFieldPropsType = {
  label?: string;
  buttonLabel?: string;
  error?: boolean;
  helperText?: React.ReactNode;
  onChange?: (value: File) => void;
};

const FilePickerField: React.FC<FilePickerFieldPropsType> = ({
  label,
  error,
  helperText,
  onChange,
}) => {
  const handleDrop = useCallback((acceptedFiles: File[]) => {
    if (onChange) {
      const file = acceptedFiles[0];
      onChange(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <FormControl margin="normal" error={error}>
      {label && (
        <Typography color="textSecondary" variant="body1" gutterBottom>
          {label}
        </Typography>
      )}

      <IconButton {...getRootProps()}>
        <PhotoIcon color="secondary" fontSize="medium" />
        <div {...getInputProps()}></div>
      </IconButton>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default React.memo(FilePickerField);
