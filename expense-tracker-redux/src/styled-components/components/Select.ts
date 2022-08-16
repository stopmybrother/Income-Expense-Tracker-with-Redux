import styled, { css, keyframes } from "styled-components";

interface ISelectWrapper {
    shaking?: boolean;
};
interface ISelectDropdownBtn {
    isOpened: boolean;
    selectedCategoryColor: string;
};
interface ISelectItem {
    category: string;
};

const shake = keyframes`
  0% {
    transform: rotate(-1.5deg);
  }
  25% {
    transform: rotate(1.5deg);
  }
  50% {
    transform: rotate(-0.75deg);
  }
  75% {
    transform: rotate(0.75deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const SelectWrapper = styled.div<ISelectWrapper>`
  position: relative;
  user-select: none;
  ${ p => p.shaking && css`
    animation-name: ${ shake };
    animation-duration: 0.5s;
  ` } 
`;
export const SelectContent = styled.div`
  position: absolute;
  top: 115%;
  width: 100%;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
`;
export const SelectItem = styled.div<ISelectItem>`
  padding: 10px;
  cursor: pointer;
  background-color: ${ p => p.theme.colors.whitePinkMinLight };
  border-bottom: 1px solid ${ p => p.theme.colors.blackSuperOpacity };
  position: relative;
  transition: all 0.2s linear;
  &:hover {
    background-color: ${ p => p.theme.colors.whitePinkLight };
    border-bottom: 1px solid transparent;
  }
  &::before {
    content: "";
    position: absolute;
    top: 43%;
    right: calc(0% - 15.7px);
    width: 41px;
    height: 6px;
    border-radius: 2px;
    transform: rotate(90deg);
    ${ p => p.category === "income" && css`
      background-color: ${ p => p.theme.colors.greenLightOpacity };
    ` }
    ${ p => p.category === "expense" && css`
      background-color: ${ p => p.theme.colors.redSuperLightOpacity };
    ` }
  }
  &:last-child {
    border-bottom: none;
  }
`;
export const SelectDropdownBtn = styled.div<ISelectDropdownBtn>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${ p => p.theme.colors.whiteExtraLight };
  ${ p => p.selectedCategoryColor === "income" && css`
    color: ${ p => p.theme.colors.darkGreen };
  `};
  ${ p => p.selectedCategoryColor === "expense" && css`
    color: ${ p => p.theme.colors.darkRed };
  `};
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: all 0.2s linear;
  &::before, ::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 15px;
    height: 2px;
    border-radius: 3px;
    background-color: ${ p => p.theme.colors.darkGray };
    transition: all 0.2s linear;
  }
  &::before {
    left: calc( 100% - 37px );
    transform: rotate( 45deg );
    ${ p => p.isOpened && css `
      transform: rotate( -45deg );
  ` }
  }
  &::after {
    left: calc( 100% - 27px );
    transform: rotate( -45deg );
    ${ p => p.isOpened && css `
      transform: rotate( 45deg );
  ` }
  }
  &:hover {
    background-color: ${ p => p.theme.colors.whiteLight };
  }
  &:active {
    background-color: ${ p => p.theme.colors.white };
  }
`;