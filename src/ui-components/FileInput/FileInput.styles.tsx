import {
  TextField as MUITextField,
  Box as MUIBox,
  Button as MUIButton,
} from "@mui/material";
import { styled } from "@mui/system";

export const TextField = styled(MUITextField)(({ theme }) => ({
  height: "52px",
  width: "100%",
  maxWidth: "380px",

  "& .MuiInputBase-root": {
    height: "54px",
    borderRadius: "0px 4px 4px 0px !important",
  },
}));

export const Box = styled(MUIBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  width: "83px",
  height: "54px",
  color: "rgba(0, 0, 0, 0.87)",
  border: "1px solid rgba(0, 0, 0, 0.87)",
  borderRadius: "4px 0px 0px 4px",
  "&:hover": {
    border: "1px solid rgba(0, 0, 0, 0.87)",
    backgroundColor: "transparent",
  },
}));
