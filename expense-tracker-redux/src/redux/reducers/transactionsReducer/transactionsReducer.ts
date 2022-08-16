import { ADD_TRANSACTION, REMOVE_TRANSACTION } from "../../actions/actions";
import { ITransaction, TRANSACTIONS } from "../../../mock-data/mock-data";
import { TTransactionType } from "../../actions/transactionsActionCreator/transactionsActionCreator";

const initialState = TRANSACTIONS;

export const transactionsReducer = (
                                        state: ITransaction[] = initialState,
                                        {
                                            type,
                                            payload
                                        }: TTransactionType
                                    ): ITransaction[] => {
    switch ( type ) {
        case ADD_TRANSACTION:
            return [
                ...state,
                {
                    id: payload.id,
                    category: payload.category,
                    categoryDetails: payload.categoryDetails,
                    text: payload.text,
                    amount: payload.amount,
                }
            ];
        case REMOVE_TRANSACTION:
            return state.filter( ( transaction: ITransaction ) => transaction.id !== payload.id );
        default:
            return state;
    };
};