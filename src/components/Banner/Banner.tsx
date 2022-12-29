import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-scroll";

import {
  Container,
  BannerComponent,
  Typography,
  Content,
} from "./Banner.styles";

const Banner = () => {
  return (
    <Container>
      <BannerComponent>
        <Content>
          <Typography variant="h1">
            Test assignment for front-end developer
          </Typography>
          <Typography variant="body1">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </Typography>
          <Link to="signUp" spy={true} smooth={true} offset={50} duration={500}>
            <Button>Sign up</Button>
          </Link>
        </Content>
      </BannerComponent>
    </Container>
  );
};

export default Banner;
