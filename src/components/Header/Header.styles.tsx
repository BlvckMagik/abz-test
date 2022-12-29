import { Box as MUIBox } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(MUIBox)(({ theme }) => ({
  maxWidth: "1170px",
  height: "60px",
  backgroundColor: theme.palette.background.default,
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "all .5s",

  [theme.breakpoints.down("sm")]: {
    padding: "0 16px",
  },

  [theme.breakpoints.between("sm", "md")]: {
    padding: "0 32px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    padding: "0 60px",
  },

  [theme.breakpoints.up("lg")]: {
    padding: "0",
  },
}));
