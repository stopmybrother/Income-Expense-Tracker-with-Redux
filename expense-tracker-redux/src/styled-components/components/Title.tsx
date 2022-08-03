import React from "react";
import styled from "styled-components";

interface IHOneTitle {
    colorHOneTitle?: string;
}
export const HOneTitle = styled.h1<IHOneTitle>`
  font-size: 34px;
  line-height: 38px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${ p => p.colorHOneTitle || "" };
`;