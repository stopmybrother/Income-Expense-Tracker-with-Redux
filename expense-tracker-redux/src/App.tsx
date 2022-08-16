import React, { useMemo } from 'react';
import './App.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { themes } from "./styled-components/themes";
import { useSelector } from "react-redux";
import { transactionsSelector } from "./redux/selectors/transactionsSelector/transactionsSelector";
import { ITransaction } from "./mock-data/mock-data";
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
    const transactions = useSelector( transactionsSelector );
    const incomeAmount: number = useMemo( () =>
        +transactions
            .filter( ( transaction: ITransaction ) => transaction.category === "income" )
            .map( ( transaction: ITransaction ) => transaction.amount )
            .reduce( ( prev: number, amount: number) => ( prev += amount ), 0 )
            .toFixed( 2 ),
        [ transactions ]
    );
    const expenseAmount: number = useMemo( () =>
        +transactions
            .filter( ( transaction: ITransaction ) => transaction.category === "expense" )
            .map( ( transaction: ITransaction ) => transaction.amount )
            .reduce( ( prev:number, amount: number) => ( prev += Math.abs(amount) ), 0 )
            .toFixed( 2 ), [ transactions ]
    );
    const totalAmount: number = useMemo( () =>
        incomeAmount - expenseAmount,
        [ incomeAmount, expenseAmount ] );
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
                  <Balance
                      totalAmount = { totalAmount }
                  />
                  <IncomeExpenses
                      incomes = { incomeAmount }
                      expenses = { expenseAmount }
                  />
                  <TransactionList />
                  <AddTransaction />
              </FlexContainerCentered>
          </Wrapper>
      </ThemeProvider>
  );
}

export default App;
