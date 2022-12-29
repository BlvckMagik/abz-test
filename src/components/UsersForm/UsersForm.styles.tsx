import { Box as MUIBox, FormControl as MUIFormControl } from "@mui/material";
import { styled } from "@mui/system";

export const Layout = styled(MUIBox)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 16px 100px 16px",
});

export const ModalBody = styled(MUIBox)({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "36px 56px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
});

export const FormControl = styled(MUIFormControl)({
  width: "100%",
  maxWidth: "380px",
});
