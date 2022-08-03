import React from 'react';
import './App.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { themes } from "./styled-components/themes";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./styled-components/components/Wrapper";
import { FlexContainerCentered } from "./styled-components/components/Container";
import { Balance } from "./components/Balance/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses/IncomeExpenses";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    display: block;
    cursor: pointer;
    outline: none;
  }
  a {
    display: block;
    cursor: pointer;
    text-decoration: none;
  }
  input {
    display: block;
    cursor: pointer;
    outline: none;
  }
  span {
    display: block;
  }
  img {
    display: block;
  }
  li {
    list-style: none;
  }
`;

export const App = () => {
  return (
      <ThemeProvider theme={ themes }>
        <GlobalStyle />
          <Header />
          <Wrapper>
              <FlexContainerCentered
                  maxWidth = { 500 }
                  flexDirection = "column"
                  rowGap = { 35 }
              >
                  <Balance />
                  <IncomeExpenses />
                  <TransactionList />
                  <AddTransaction />
              </FlexContainerCentered>
          </Wrapper>
      </ThemeProvider>
  );
}

export default App;
