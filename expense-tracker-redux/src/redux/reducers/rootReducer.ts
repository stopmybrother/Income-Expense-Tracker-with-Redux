import { combineReducers } from "redux";
import { transactionsReducer } from "./transactionsReducer/transactionsReducer";

export const rootReducer = combineReducers( {
    transactions: transactionsReducer,
} );

export type RootState = ReturnType<typeof rootReducer>;