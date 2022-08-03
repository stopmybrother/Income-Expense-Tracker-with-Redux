import React from "react";
import { useSelector } from "react-redux";
import { transactionsSelector } from "../../redux/selectors/transactionsSelector/transactionsSelector";
import { ITransaction } from "../../mock-data/mock-data";
import { COLOR } from "../../styled-components/color-constants";
import { FlexContainerCentered, FlexContainerNotCentered } from "../../styled-components/components/Container";
import { Text }  from "../../styled-components/components/Text";

export const IncomeExpenses = () => {
    const transactions = useSelector( transactionsSelector );
    const amounts = transactions.map( ( transaction: ITransaction ) => transaction.amount );
    const income = amounts
        .filter( ( amount: number ) => amount > 0 )
        .reduce( ( prev:number, amount: number) => ( prev += amount ), 0 )
        .toFixed( 2 );
    const expense = amounts
        .filter( ( amount: number ) => amount < 0 )
        .reduce( ( prev:number, amount: number) => ( prev += Math.abs(amount) ), 0 )
        .toFixed( 2 );
    return (
        <FlexContainerCentered
            maxWidth = { 500 }
            backgroundColor = { COLOR.pinkSuperLight }
            shadow
            beforeIncomeExpense
        >
            <FlexContainerNotCentered
                paddingTop = { 15 }
                paddingBottom = { 15 }
                flexDirection = "column"
                rowGap = { 5 }
            >
                <Text
                    fontWeight = { 500 }
                    textTransform = "uppercase"
                >
                    income
                </Text>
                <Text
                    fontSize = { 26 }
                    lineHeight = { 30 }
                    fontWeight = { 600 }
                    colorText = { COLOR.green }
                >
                    ${ income }
                </Text>
            </FlexContainerNotCentered>
            <FlexContainerNotCentered
                paddingTop = { 15 }
                paddingBottom = { 15 }
                flexDirection = "column"
                rowGap = { 5 }
            >
                <Text
                    fontWeight = { 500 }
                    textTransform = "uppercase"
                >
                    expense
                </Text>
                <Text
                    fontSize = { 26 }
                    lineHeight = { 30 }
                    fontWeight = { 600 }
                    colorText = { COLOR.red }
                >
                    ${ expense }
                </Text>
            </FlexContainerNotCentered>
        </FlexContainerCentered>
    );
};