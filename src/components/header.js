import React from "react";
import logo_png from "../assets/logo.png";
import pixel from "../assets/pixel.png";
import styled from "styled-components";

const phoneSize = "600px";

const Container = styled.div`
  background-color: #fcf23d;
  display: grid;
  grid-template-areas:
    "pixel pixel pixel"
    "title space image";

  grid-template-columns: 25% 50% 25%;
  grid-template-rows: [pixel] 70px [nav] 50px;
  @media (max-width: ${phoneSize}) {
    grid-template-rows: [pixel] 40px [nav] 40px;
    grid-template-columns: 50% 20% 30%;
  }
`;

const PixelRow = styled.div`
  grid-area: pixel;
  background-image: url(${pixel});
  background-size: 120px;
  @media (max-width: ${phoneSize}) {
    background-size: 70px;
  }
`;

const Title = styled.h5`
  text-align: center;
  width: 100%;
  grid-area: title;
  margin: auto;
  align-self: center;
`;

const Logo = styled.img`
  grid-column: 3 / span 1;
  grid-row: 1 / span 2;
  height: 100%;
`;

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <PixelRow />
        <Title>Medlemssystem</Title>
        <Logo src={logo_png} alt="Logo" />
      </Container>
    );
  }
}
