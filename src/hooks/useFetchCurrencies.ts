import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRequest } from "../store/currency/currency.actions"
import {
    selectCurrencies,
    selectCurrencyError,
    selectIsCurrencyLoading,
} from "../store/currency/currency.selectors"

export default function useFetchCurrencies() {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsCurrencyLoading)
    const error = useSelector(selectCurrencyError)
    const currencies = useSelector(selectCurrencies)

    useEffect(() => {
        dispatch(fetchRequest())
    }, [dispatch])

    return { currencies, isLoading, error }
}
