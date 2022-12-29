import {
  Card as MUICard,
  CardContent as MUICardContent,
  Avatar as MUIAvatar,
} from "@mui/material";
import { styled } from "@mui/system";

export const Card = styled(MUICard)(({ theme }) => ({
  minHeight: "254px",
  width: "30%",

  [theme.breakpoints.between("sm", "md")]: {
    width: "45%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

export const CardContent = styled(MUICardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Avatar = styled(MUIAvatar)({
  height: "70px",
  width: "70px",
  marginBottom: "20px",
});
