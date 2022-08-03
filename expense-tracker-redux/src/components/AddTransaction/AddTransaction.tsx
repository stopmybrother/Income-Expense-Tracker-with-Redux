import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ITransaction } from "../../mock-data/mock-data";
import { addTransaction, removeTransaction } from "../../redux/actions/transactionsActionCreator/transactionsActionCreator";
import { FlexContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";
import { Form, Label, Input, SubmitButton } from "../../styled-components/components/Form";

export const AddTransaction = () => {
    const [ textValue, setTextValue ] = useState( "" );
    const [ amountValue, setAmountValue ] = useState( "" );

    const dispatch = useDispatch();

    const dispatchedAddTransaction = useCallback(
        ( transaction: ITransaction ) =>
            dispatch( addTransaction( {
                id: transaction.id,
                text: transaction.text,
                amount: transaction.amount,
            } ) ),
        [ dispatch ]
    );

    const handleInputTextChange = useCallback( ( e: React.FormEvent<HTMLInputElement> ) => {
        const { value } = e.target as HTMLInputElement;
        setTextValue( value );
    }, [] );
    const handleInputAmountChange = useCallback( ( e: React.FormEvent<HTMLInputElement> ) => {
        const { value } = e.target as HTMLInputElement;
        setAmountValue( value );
    }, [] );

    const handleSubmit = useCallback( ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if ( textValue && amountValue ) {
            dispatchedAddTransaction( {
                id: ( new Date() ).getTime(),
                text: textValue,
                amount: +amountValue,
            } );
            setTextValue("");
            setAmountValue("");
        }
    }, [ textValue, amountValue ] );

    return (
        <FlexContainerNotCentered
            flexDirection = "column"
            alignItems = "left"
            rowGap = { 20 }
        >
            <Text
                beforeTransactionList
            >
                Add new transaction
            </Text>
            <Form
                onSubmit = { handleSubmit }
            >
                <FlexContainerNotCentered
                    flexDirection = "column"
                    alignItems = "left"
                    rowGap = { 10 }
                >
                    <Label>
                        Text
                    </Label>
                    <Input
                        type = "text"
                        value = { textValue }
                        onChange = { handleInputTextChange }
                        placeholder = "Enter text..."
                        required
                    />
                </FlexContainerNotCentered>
                <FlexContainerNotCentered
                    flexDirection = "column"
                    alignItems = "left"
                    rowGap = { 10 }
                >
                    <Label>
                        Amount (negative - expense, positive - income)
                    </Label>
                    <Input
                        type = "number"
                        value = { amountValue }
                        onChange = { handleInputAmountChange }
                        placeholder = "Enter amount..."
                        required
                    />
                </FlexContainerNotCentered>
                <SubmitButton>
                    Add transaction
                </SubmitButton>
            </Form>
        </FlexContainerNotCentered>
    );
};