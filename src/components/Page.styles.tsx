import { Box as MUIBox } from "@mui/material";
import { styled } from "@mui/system";

export const Layout = styled(MUIBox)(({ theme }) => ({
  maxWidth: "1170px",
  backgroundColor: theme.palette.background.default,
  margin: "auto",
}));
