import React from "react";
import { styled } from "styled-components";
import {yellow, white} from "../../../styles/colors";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundcolor || "transparent"};
  color: ${(props) => props.color || white};
  border-color: ${(props) => props.color || white};
  display: block;
  margin: 0 auto;
  padding: 5px 18px;
  border: 2px solid;
  cursor: pointer;
  transition: all .7s ease;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.hoverbackgroundcolor || yellow};
    color: ${(props) => props.hovercolor || white};
  }
`;

const MainButton = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default MainButton;
