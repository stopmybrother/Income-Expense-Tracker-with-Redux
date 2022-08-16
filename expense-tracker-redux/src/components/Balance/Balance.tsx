import React from "react";
import { ContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";

interface IBalance {
    totalAmount: number;
};

export const Balance = ( { totalAmount }: IBalance ) => {
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
                { totalAmount < 0 ? "-" : "" } ${ Math.abs( totalAmount ) }
            </Text>
        </ContainerNotCentered>
    );
};