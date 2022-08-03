import React from "react";
import styled, { css } from "styled-components";

interface IListLi {
    status?: string;
};

export const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ListLi = styled.li<IListLi>`
  padding: 10px 20px 10px 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${ p => p.theme.colors.pinkSuperLight };
  box-shadow: -1px 1px 4px ${ p => p.theme.colors.blackOpacity };
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 43%;
    right: calc(0% - 17.7px);
    width: 42px;
    height: 6px;
    transform: rotate(90deg);
    ${ p => p.status === "income" && css`
      background-color: ${ p => p.theme.colors.green };
    ` }
    ${ p => p.status === "expense" && css`
      background-color: ${ p => p.theme.colors.red };
    ` }
  }
`;