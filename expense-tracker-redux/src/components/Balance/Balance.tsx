import React from "react";
import { useSelector } from "react-redux";
import { transactionsSelector } from "../../redux/selectors/transactionsSelector/transactionsSelector";
import { ITransaction } from "../../mock-data/mock-data";
import { ContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";

export const Balance = () => {
    const transactions = useSelector( transactionsSelector );
    const amounts = transactions.map( ( transaction: ITransaction ) => transaction.amount );
    const total = +amounts.reduce( ( acc: number, amount: number ) => ( acc += amount ), 0 ).toFixed( 2 );
    return (
        <ContainerNotCentered>
            <Text
                textTransform = "uppercase"
                fontWeight = { 600 }
            >
                your Balance
            </Text>
            <Text
                fontSize = { 34 }
                lineHeight = { 38 }
                fontWeight = { 700 }
            >
                { total < 0 ? "-" : "" } ${ Math.abs( total ) }
            </Text>
        </ContainerNotCentered>
    );
};