import {
  Container as MUIContainer,
  Typography as MUITypography,
  Box as MUIBox,
} from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled(MUIContainer)({
  padding: "0 !important",
  h1: {
    marginBottom: "21px",
  },

  p: {
    marginBottom: "32px",
  },
});

export const Typography = styled(MUITypography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: "center",
}));

export const Content = styled(MUIBox)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "380px",
});

export const BannerComponent = styled(MUIContainer)(({ theme }) => ({
  width: "100%",
  height: "650px",
  objectFit: "cover",
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require("../../images/Banner.jpeg")})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "all .5s",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    height: "500px",
  },
}));
