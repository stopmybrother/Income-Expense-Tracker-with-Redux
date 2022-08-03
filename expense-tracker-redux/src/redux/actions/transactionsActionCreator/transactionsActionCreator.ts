import { ADD_TRANSACTION, REMOVE_TRANSACTION } from "../actions";
import { ITransaction } from "../../../mock-data/mock-data";

interface IAddTransaction {
    type: typeof ADD_TRANSACTION;
    payload: ITransaction;
};
interface IRemoveTransaction {
    type: typeof REMOVE_TRANSACTION;
    payload: {
        id: number
    };
};

export type TTransactionType = IAddTransaction | IRemoveTransaction;

export const addTransaction = ( trasaction: ITransaction ): TTransactionType => {
    return {
        type: ADD_TRANSACTION,
        payload: {
            ...trasaction,
        },
    };
};

export const removeTransaction = ( id: number ): TTransactionType => {
    return {
        type: REMOVE_TRANSACTION,
        payload: {
            id
        },
    };
};