import { CurrencyActionTypes } from "./currency.types"
import { IApplicationState } from "../index"

import { ActionCreator, Action, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import CurrencyApiService from "../../services/CurrencyApiService"
import { mapCurrencies } from "../../utils/mapCurrencies"

export type AppThunk = ActionCreator<
    ThunkAction<void, IApplicationState, null, Action<string>>
>

export const fetchRequest: AppThunk = () => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            dispatch({
                type: CurrencyActionTypes.FETCH_REQUEST,
            })

            const { data } = await CurrencyApiService.getCurrencies()
            const mappedData = mapCurrencies(data.fx)

            return dispatch({
                type: CurrencyActionTypes.FETCH_SUCCESS,
                payload: mappedData,
            })
        } catch (error) {
            return dispatch({
                type: CurrencyActionTypes.FETCH_ERROR,
                payload: error,
            })
        }
    }
}
