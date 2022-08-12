import React, { useState} from "react";
import { COLOR } from "../../styled-components/color-constants";
import { SelectWrapper, SelectDropdownBtn, SelectContent, SelectItem } from "../../styled-components/components/Select";
import { ICategory, CATEGORIES } from "../../mock-data/mock-data";
import { FlexContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";

interface ISelectCategoryOfTransaction {
    incomeOrExpense: string;
    setIncomeOrExpense: any;
    selectedCategory: string;
    setSelectedCategory: any;
};

export const SelectCategoryOfTransaction = ( {
                                                 incomeOrExpense,
                                                 setIncomeOrExpense,
                                                 selectedCategory,
                                                 setSelectedCategory
                                             }: ISelectCategoryOfTransaction ) => {
    const [ isOpened, setIsOpened ] = useState( false );

    return (
        <SelectWrapper>
            <SelectDropdownBtn
                onClick = { () => setIsOpened( !isOpened ) }
                isOpened = { isOpened }
                selectedCategoryColor = { incomeOrExpense }
            >
                {
                    selectedCategory ? selectedCategory : "Choose One"
                }
            </SelectDropdownBtn>
            {
                isOpened && (
                    <SelectContent>
                        {
                            CATEGORIES.map( ( category: ICategory, index: number ) => (
                                <SelectItem
                                    key = { `item ${ index + 1 }` }
                                    onClick = { () => {
                                        setIncomeOrExpense( category.category )
                                        setSelectedCategory( category.categoryDetails )
                                        setIsOpened( !isOpened )
                                    } }
                                    category = { category.category }
                                >
                                    { category.categoryDetails }
                                </SelectItem>
                            ) )
                        }
                    </SelectContent>
                )
            }
        </SelectWrapper>
    );
};