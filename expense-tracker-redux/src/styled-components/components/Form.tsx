import React from "react";
import styled from "styled-components";

export const Form = styled.form`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  background-color: ${ p => p.theme.colors.whiteExtraLight };
  transition: all 0.3s linear;
  &:hover {
    background-color: ${ p => p.theme.colors.whiteLight };
  }
  &:focus {
    background-color: ${ p => p.theme.colors.white };
  }
`;

export const SubmitButton = styled.button.attrs( { type: "submit" } )`
  padding: 10px;
  border: 1px solid ${ p => p.theme.colors.blackOpacity };
  border-radius: 2px;
  background-color: ${ p => p.theme.colors.redNonLightOpacity };
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: ${ p => p.theme.colors.blackOpacity };
  transition: all 0.3s linear;
  &:hover {
    border: 1px solid ${ p => p.theme.colors.black };
    background-color: ${ p => p.theme.colors.redNonLight };
    color: ${ p => p.theme.colors.black };
  }
  &:active {
    background-color: ${ p => p.theme.colors.redLight };
  }
`;