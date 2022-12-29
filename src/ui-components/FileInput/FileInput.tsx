import React, { FC } from "react";

import { TextField, Box, Button } from "./FileInput.styles";

type Props = {
  value: string | null;
  helperText: string;
  error: boolean;
  onChange: (file: File | null) => void;
};

const FileInput: FC<Props> = ({ value, error, helperText, onChange }) => {
  return (
    <label htmlFor="upload-photo">
      <input
        style={{ display: "none" }}
        id="upload-photo"
        name="upload-photo"
        type="file"
        accept=".jpg, .jpeg"
        onChange={({ target }) => onChange(target.files?.[0] || null)}
      />
      <Box>
        <Button
          // @ts-ignore
          component="span"
          color="secondary"
          variant="outlined"
          aria-label="add"
        >
          Upload
        </Button>
        <TextField
          error={error}
          value={value || ""}
          InputProps={{
            readOnly: true,
          }}
          placeholder="Upload your photo"
          focused={false}
          helperText={helperText}
          color="secondary"
        />
      </Box>
    </label>
  );
};

export default FileInput;
