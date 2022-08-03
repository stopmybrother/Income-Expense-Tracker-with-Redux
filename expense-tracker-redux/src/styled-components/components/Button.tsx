import React from "react";
import styled from "styled-components";

export const DeleteButton = styled.button`
  content: "";
  position: absolute;
  top: 0;
  left: calc(0% - 30px);
  width: 30px;
  height: 100%;
  border: 1px solid transparent;
  background-color: ${ p => p.theme.colors.redLight };
  box-shadow: -1px 1px 4px ${ p => p.theme.colors.blackOpacity };
  font-size: 24px;
  line-height: 28px;
  color: ${ p => p.theme.colors.blackOpacity };
  transition: all 0.3s linear;
  &:hover {
    background-color: ${ p => p.theme.colors.redSuperLight };
    color: ${ p => p.theme.colors.black };
  }
  &:active {
    background-color: ${ p => p.theme.colors.redLight };
    color: ${ p => p.theme.colors.blackOpacity };
  }
`;