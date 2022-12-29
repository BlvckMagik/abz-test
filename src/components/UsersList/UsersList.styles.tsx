import { Box as MUIBox } from "@mui/material";
import { styled } from "@mui/system";

export const Layout = styled(MUIBox)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "140px 16px",
});

export const CardsContainer = styled(MUIBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "29px",
  transition: "all .5s",
  flexWrap: "wrap",
  flexGrow: 2,
  marginBottom: "50px",

  [theme.breakpoints.between("xs", "sm")]: {
    gap: "16px",
  },
  [theme.breakpoints.down("xs")]: {
    gap: "20px",
  },
}));
