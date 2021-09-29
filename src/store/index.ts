import { applyMiddleware, combineReducers, createStore, Store } from "redux"
import { ICurrencyState } from "./currency/currency.types"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

// reducers
import { currencyReducer } from "./currency/currency.reducer"

export interface IApplicationState {
    currency: ICurrencyState
}

export const rootReducer = combineReducers({
    currency: currencyReducer,
})

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk))

const configureStore = (initialState: IApplicationState): Store<IApplicationState> =>
    createStore(rootReducer, initialState, composedEnhancers)

export default configureStore
