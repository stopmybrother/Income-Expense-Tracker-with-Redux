import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import { Wrapper } from "../../styled-components/components/Wrapper";
import { ContainerCentered } from "../../styled-components/components/Container";
import { HOneTitle } from "../../styled-components/components/Title";

export const Header = () => {
    return (
        <Wrapper
            paddingTop = { 70 }
            paddingBottom = { 30 }
        >
            <ContainerCentered>
                <HOneTitle
                    colorHOneTitle = { COLOR.black }
                >
                    expense tracker
                </HOneTitle>
            </ContainerCentered>
        </Wrapper>
    );
};