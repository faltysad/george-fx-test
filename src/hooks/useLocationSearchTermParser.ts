import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router"
import queryString from "query-string"
import { CurrencyActionTypes } from "../store/currency/currency.types"

export function useLocationSearchTermParser() {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        const locationSearchTerm = queryString.parse(location.search)?.searchTerm

        dispatch({
            type: CurrencyActionTypes.SEARCH_TERM_CHANGE,
            payload: locationSearchTerm || null,
        })
    }, [location.search, dispatch])
}
