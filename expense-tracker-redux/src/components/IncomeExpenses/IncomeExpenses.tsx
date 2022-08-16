import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import { FlexContainerCentered, FlexContainerNotCentered } from "../../styled-components/components/Container";
import { Text }  from "../../styled-components/components/Text";

interface IIncomeExpenses {
    incomes: number;
    expenses: number;
};

export const IncomeExpenses = (
                                {
                                    incomes,
                                    expenses
                                }: IIncomeExpenses ) => {
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
                    ${ incomes }
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
                    ${ expenses }
                </Text>
            </FlexContainerNotCentered>
        </FlexContainerCentered>
    );
};