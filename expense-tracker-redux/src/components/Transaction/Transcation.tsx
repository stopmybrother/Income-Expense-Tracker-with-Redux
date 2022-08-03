import React, {useCallback, useState} from "react";
import { useDispatch } from "react-redux";
import { ITransaction } from "../../mock-data/mock-data";
import { ListLi } from "../../styled-components/components/List";
import { Span } from "../../styled-components/components/Text";
import { DeleteButton } from "../../styled-components/components/Button";
import {removeTransaction} from "../../redux/actions/transactionsActionCreator/transactionsActionCreator";

interface ITransactionsList {
    key: number;
    transaction: ITransaction;
};

export const Transaction = (
    {
        key,
        transaction
    }: ITransactionsList
) => {
    const [ isShown, setIsShown ] = useState( false );
    const dispatch = useDispatch();

    const dispatchedRemoveTransaction = useCallback(
        ( id: number ) =>
            dispatch( removeTransaction( id ) ),
        [ dispatch ]
    );
    return (
        <ListLi
            onMouseEnter = { () => setIsShown(true) }
            onMouseLeave = { () => setIsShown(false) }
            status = { transaction.amount < 0 ? "expense" : "income" }
        >
            { transaction.text }
            <Span>
                { transaction.amount < 0 ? "-" : "+" } ${ Math.abs( transaction.amount ) }
            </Span>
            { isShown &&
                <DeleteButton
                    onClick = { () => dispatchedRemoveTransaction( transaction.id ) }
                >
                    x
                </DeleteButton>
            }
        </ListLi>
    );
};