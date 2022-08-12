export interface ITransaction {
    id: number;
    text: string;
    amount: number;
};
export interface ICategory {
    id: number;
    category: string;
    categoryDetails: string;
};

export const CATEGORIES: ICategory[] = [
    {
        id: 1,
        category: "income",
        categoryDetails: "Salary",
    },
    {
        id: 2,
        category: "income",
        categoryDetails: "Other earnings",
    },
    {
        id: 3,
        category: "expense",
        categoryDetails: "Rent",
    },
    {
        id: 4,
        category: "expense",
        categoryDetails: "Petrol",
    },
    {
        id: 5,
        category: "expense",
        categoryDetails: "Health",
    },
    {
        id: 3,
        category: "expense",
        categoryDetails: "Food and etc.",
    },
    {
        id: 6,
        category: "expense",
        categoryDetails: "Shopping",
    },
    {
        id: 7,
        category: "expense",
        categoryDetails: "Entertainment",
    },
    {
        id: 8,
        category: "expense",
        categoryDetails: "Pernicious habits",
    },
    {
        id: 9,
        category: "expense",
        categoryDetails: "Other costs",
    },
];

export const TRANSACTIONS: ITransaction[] = [];

