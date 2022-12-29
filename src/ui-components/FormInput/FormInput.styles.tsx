import { TextField as MUITextField } from "@mui/material";
import { styled } from "@mui/system";

export const TextField = styled(MUITextField)(({ theme }) => ({
  width: "100%",
  maxWidth: "380px",
  marginBottom: "50px",
}));
