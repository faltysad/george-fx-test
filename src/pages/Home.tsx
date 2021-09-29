import { ChangeEvent, useState } from "react"
import Header from "../components/Header/Header"
import List from "../components/List/List"
import SearchBar from "../components/SearchBar/SearchBar"
import useCurrencyFilterAndHandleQueryParams from "../hooks/useCurrencyFilterAndHandleQueryParams"
import useDebounce from "../hooks/useDebounce"

function Home() {
    const [searchValue, setSearchValue] = useState<string | null>(null)
    const debouncedSearchTerm = useDebounce(searchValue, 500)
    const { filteredCurrencies, isLoading, error, isFiltering } =
        useCurrencyFilterAndHandleQueryParams(debouncedSearchTerm)

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    return (
        <div className="grid grid-rows-table">
            <Header />
            <SearchBar
                handleInputChange={handleSearchInputChange}
                searchInputDisabled={isLoading}
            />
            <List
                currencies={filteredCurrencies}
                isLoading={isLoading}
                isFiltering={isFiltering}
                isError={!!error}
            />
        </div>
    )
}

export default Home
