import { Reducer } from "redux"
import { CurrencyActionTypes, ICurrencyState } from "./currency.types"

export const initialState: ICurrencyState = {
    data: [],
    filteredData: [],
    error: undefined,
    loading: true,
    filtering: false,
    searchTerm: null,
}

const reducer: Reducer<ICurrencyState> = (state = initialState, action) => {
    switch (action.type) {
        case CurrencyActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case CurrencyActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                filteredData: action.payload,
            }
        }
        case CurrencyActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, error: action.payload }
        }

        case CurrencyActionTypes.SEARCH_TERM_CHANGE: {
            return { ...state, filtering: true, searchTerm: action.payload }
        }

        case CurrencyActionTypes.FILTER_DATA: {
            return { ...state, filtering: false, filteredData: action.payload }
        }

        default: {
            return state
        }
    }
}

export { reducer as currencyReducer }
