import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ITransaction } from "../../mock-data/mock-data";
import { addTransaction } from "../../redux/actions/transactionsActionCreator/transactionsActionCreator";
import { FlexContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";
import { Form, Label, Input, SubmitButton } from "../../styled-components/components/Form";
import { SelectCategoryOfTransaction } from "../SelectCategoryOfTransaction/SelectCategoryOfTransaction";

export const AddTransaction = () => {
    const [ textValue, setTextValue ] = useState( "" );
    const [ amountValue, setAmountValue ] = useState( "" );
    const [ incomeOrExpense, setIncomeOrExpense ] = useState( "" );
    const [ selectedCategory, setSelectedCategory ] = useState( "" );
    const [ isSubmit, setIsSubmit ] = useState( false );

    const dispatch = useDispatch();

    const dispatchedAddTransaction = useCallback(
        ( transaction: ITransaction ) =>
            dispatch( addTransaction( {
                id: transaction.id,
                category: transaction.category,
                categoryDetails: transaction.categoryDetails,
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
        if ( !selectedCategory && textValue && amountValue ) {
            setIsSubmit( true );
            setTimeout(
                () => setIsSubmit(false),
                500
            );
        };
        if ( selectedCategory && textValue && amountValue ) {
            dispatchedAddTransaction( {
                id: ( new Date() ).getTime(),
                category: incomeOrExpense,
                categoryDetails: selectedCategory,
                text: textValue,
                amount: +amountValue < 0 ? +amountValue * -1 : +amountValue,
            } );
            setIncomeOrExpense( "" );
            setSelectedCategory( "" );
            setTextValue( "" );
            setAmountValue( "" );
        }
    }, [ selectedCategory, textValue, amountValue ] );
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
                    <Text
                        fontSize = { 18 }
                        lineHeight = { 22 }
                        fontWeight = { 600 }
                    >
                        Select category of income / expenses
                    </Text>
                    <SelectCategoryOfTransaction
                        incomeOrExpense = { incomeOrExpense }
                        setIncomeOrExpense = { setIncomeOrExpense }
                        selectedCategory = { selectedCategory }
                        setSelectedCategory = { setSelectedCategory }
                        isSubmit = { isSubmit }
                    />
                </FlexContainerNotCentered>
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
                        Amount
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