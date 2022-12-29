import React from "react";

import { Box, Button } from "@mui/material";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { Link } from "react-scroll";

import { Container } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Logo />
      <Box>
        <Link to="users" spy={true} smooth={true} offset={50} duration={500}>
          <Button sx={{ marginRight: "10px" }}>Users</Button>
        </Link>
        <Link to="signUp" spy={true} smooth={true} offset={50} duration={500}>
          <Button>Sign up</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Header;
