import { legacy_createStore as createStore, compose } from "redux";
import { rootReducer } from "../reducers/rootReducer";

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
            compose;

const configureStore = ( preloadedState: any ): any => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(),
    )
);

export const store = configureStore( {} );

export type Store = typeof store;
export type AppDispatch = Store[ "dispatch" ];