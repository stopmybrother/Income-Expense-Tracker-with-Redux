import React from "react";
import styled, { css } from "styled-components";

interface IText {
    fontSize?: number;
    lineHeight?: number;
    fontWeight?: number;
    textAlign?: string
    textTransform?: string
    colorText?: string;
    backgroundColor?: string;
    beforeTransactionList?: boolean;
    borderRadius?: number;
}
export const Text = styled.p<IText>`
  min-width: 28px;
  font-size: ${ p => p.fontSize || 24 }px;
  line-height: ${ p => p.lineHeight || 28 }px;
  font-weight: ${ p => p.fontWeight || 400 };
  text-align: ${ p => p.textAlign || "left" };
  text-transform: ${ p => p.textTransform || "none" };
  background-color: ${ p => p.backgroundColor || "" };
  color: ${ p => p.colorText || "" };
  border-radius: ${ p => p.borderRadius || "none" }px;
  ${ p => p.beforeTransactionList && css`
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 140%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${ p => p.theme.colors.blackOpacity };
    }
  `}
`;

export const Span = styled.span``