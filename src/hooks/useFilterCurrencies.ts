import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    selectCurrencies,
    selectSearchTerm,
} from "../store/currency/currency.selectors"
import { CurrencyActionTypes } from "../store/currency/currency.types"
import { filterCurrencies } from "../utils/filterCurrencies"

export function useFilterCurrencies() {
    const dispatch = useDispatch()
    const currencies = useSelector(selectCurrencies)
    const searchTerm = useSelector(selectSearchTerm)

    useEffect(() => {
        if (currencies.length) {
            dispatch({
                type: CurrencyActionTypes.FILTER_DATA,
                payload:
                    searchTerm === null
                        ? currencies
                        : filterCurrencies(currencies, searchTerm),
            })
        }
    }, [searchTerm, currencies, dispatch])
}
