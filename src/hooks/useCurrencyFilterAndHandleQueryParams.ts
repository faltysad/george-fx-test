import { useSelector } from "react-redux"
import {
    selectCurrencyError,
    selectFilteredCurrencies,
    selectIsCurrencyFiltering,
    selectIsCurrencyLoading,
} from "../store/currency/currency.selectors"
import useFetchCurrencies from "./useFetchCurrencies"
import { useFilterCurrencies } from "./useFilterCurrencies"
import { useLocationSearchTermParser } from "./useLocationSearchTermParser"
import { useSearchInputQueryParamHandler } from "./useSearchInputQueryParamHandler"

function useCurrencyFilterAndHandleQueryParams(debouncedSearchTerm: string) {
    const filteredCurrencies = useSelector(selectFilteredCurrencies)
    const isLoading = useSelector(selectIsCurrencyLoading)
    const error = useSelector(selectCurrencyError)
    const isFiltering = useSelector(selectIsCurrencyFiltering)

    // The `searchTerm query param` serves as SINGLE SOURCE OF TRUTH for holding the value of searchTerm

    // Perform initial fetch of currencies from API (filtering is then performed on local copy of those data  in redux –`filteredData`)
    useFetchCurrencies()

    // Maintains synchronization between search input and query parameters (searchTerm query param)
    useSearchInputQueryParamHandler(debouncedSearchTerm)

    // Keeps query paramns & redux store in sync. Query params serve as single source of truth for controlling the searchTerm value
    // --> everytime searchTerm query param is changed, redux action is dispatched to keep the searchTerm value in sync and
    // usable across the application
    useLocationSearchTermParser()

    // Everytime searchTerm value is changed (performed by the dispatched action mentioned above), local copy of filtered currency data
    // is filtered inside redux, so it can be displayed inside the application's components.
    // We keep the initially loaded currency data untouched, so we can revert the filtered data to original state at any time.
    useFilterCurrencies()

    return {
        filteredCurrencies,
        isLoading,
        error,
        isFiltering,
    }
}

export default useCurrencyFilterAndHandleQueryParams
