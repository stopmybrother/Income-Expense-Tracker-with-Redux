import React from "react";
import styled, { css } from "styled-components";

interface IFlex {
    justifyContent?: string;
    alignContent?: string;
    alignItems?: string;
    flexDirection?: string;
    rowGap?: number;
    columnGap?: number;
}

interface IContainer extends IFlex{
    maxWidth?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    backgroundColor?: string;
    shadow?: boolean;
    beforeIncomeExpense?: boolean;
};

export const ContainerCentered = styled.div<IContainer>`
  margin: 0 auto;
  padding: 0 16px;
  max-width: ${ p => p.maxWidth || 1440 }px;
  width: 100%;
  background-color: ${ p => p.backgroundColor || "" };
`;

export const ContainerNotCentered = styled(ContainerCentered)`
  margin: 0;
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-right: ${ p => p.paddingRight || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  padding-left: ${ p => p.paddingLeft || 0 }px;
`;

export const FlexContainerCentered = styled(ContainerCentered)`
  display: flex;
  justify-content: ${ p => p.justifyContent || "center" };
  align-content: ${ p => p.alignContent || "center" };
  align-items: ${ p => p.alignItems || "center" };
  flex-direction: ${ p => p.flexDirection || "row" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
  ${ p => p.shadow && css`
      box-shadow: -1px 1px 4px ${ p => p.theme.colors.blackOpacity };
  ` }
  ${ p => p.beforeIncomeExpense && css`
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: calc(50% - 30px);
      width: 60px;
      height: 1px;
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
      background-color: ${ p => p.theme.colors.blackOpacity };
    }
  ` }
`;

export const FlexContainerNotCentered = styled(ContainerNotCentered)`
  margin: 0;
  display: flex;
  justify-content: ${ p => p.justifyContent || "center" };
  align-content: ${ p => p.alignContent || "center" };
  align-items: ${ p => p.alignItems || "center" };
  flex-direction: ${ p => p.flexDirection || "row" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
`;