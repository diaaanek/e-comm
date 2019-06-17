import React from "react";
import styled, { keyframes } from "styled-components";
import { withTheme } from "@callstack/react-theme-provider";

const Header = ({ theme }) => (
  <Container textColor={theme.textColor} background={theme.backgroundColor}>
    <div>
      <Logo src={theme.logo} rotate={theme.rotate} />
    </div>
  </Container>
);

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 5rem;
  animation: ${props => (props.rotate ? rotate360 : "none")} 2s linear infinite;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-family: ${props => props.fontFamily};
  color: ${props => props.textColor};
  background-color: ${props => props.background};
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
`;

export default withTheme(Header);
