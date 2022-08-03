export interface ITransaction {
    id: number;
    text: string;
    amount: number;
};

export const TRANSACTIONS: ITransaction[] = [];