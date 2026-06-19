import React from 'react';
import { Field } from 'react-final-form';
import FilePickerField from './FilePickerField/FilePickerField';

type PropsType = {
  name: string;
};

const FilePickerFieldControlled: React.FC<PropsType> = ({ name }) => {
  return (
    <Field name={name}>
      {({ input }) => {
        return <FilePickerField {...input} />;
      }}
    </Field>
  );
};

export default FilePickerFieldControlled;
