import React from "react";
import styled from "styled-components";

interface IWrapper {
    paddingTop?: number;
    paddingBottom?: number;
    maxWidth?: number;
    backgroundColor?: string;
}
export const Wrapper = styled.div<IWrapper>`
  padding-top: ${ p => p.paddingTop || 25 }px;
  padding-bottom: ${ p => p.paddingBottom || 25 }px;
  background-color: ${ p => p.backgroundColor || "" };
`;
