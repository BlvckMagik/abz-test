import palette from "./palette";

const overrides = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: 400,
        minWidth: "100px",
        borderRadius: "80px",

        "&:hover": {
          backgroundColor: palette.primary.light,
        },
        "&.Mui-disabled": {
          color: "#FFFFFFDE",
          backgroundColor: "#B4B4B4",
        },
      },
    },
  },
};

export default overrides;
