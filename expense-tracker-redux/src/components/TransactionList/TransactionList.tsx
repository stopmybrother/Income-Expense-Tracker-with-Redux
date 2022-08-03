import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { transactionsSelector } from "../../redux/selectors/transactionsSelector/transactionsSelector";
import { FlexContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";
import { ListUl } from "../../styled-components/components/List";
import { Transaction } from "../Transaction/Transcation";
import { ITransaction } from "../../mock-data/mock-data";

export const TransactionList = () => {
    const transactions = useSelector( transactionsSelector );
    const isTransactionExists = useMemo( () => transactions && transactions.length > 0, [ transactions ] );
    return (
        <FlexContainerNotCentered
            flexDirection = "column"
            alignItems = "left"
            rowGap = { 30 }
        >
            <Text
                beforeTransactionList
            >
                History
            </Text>
            {
                isTransactionExists &&
                    <ListUl>
                        {
                            transactions.map( ( transaction: ITransaction ) => (
                                <Transaction
                                    key = { transaction.id }
                                    transaction = { transaction }
                                />
                            ) )
                        }
                    </ListUl>
            }
        </FlexContainerNotCentered>
    );
};