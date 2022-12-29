import React, { FC } from "react";

import { TextField } from "./FormInput.styles";

type Props = {
  required: boolean;
  fieldName: string;
  value: string;
  helperText?: string;
  sx?: object;
  error?: boolean;
  onChange: (value: string) => void;
};

const FormInput: FC<Props> = ({
  required,
  fieldName,
  helperText,
  sx,
  error,
  value,
  onChange,
}) => {
  return (
    <TextField
      required={required}
      value={value}
      error={error}
      sx={sx}
      helperText={helperText}
      focused={false}
      color="secondary"
      label={fieldName}
      onChange={({ target }) => onChange(target.value)}
    />
  );
};

export default FormInput;
