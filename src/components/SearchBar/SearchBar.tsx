import { ChangeEvent, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { selectSearchTerm } from "../../store/currency/currency.selectors"

interface ISearchBarProps {
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    searchInputDisabled: boolean
}

// This component is not intended for universal use, it handles all the necessary side-effects
// to ensure synchronization between query params and search input value
const SearchBar = (props: ISearchBarProps) => {
    const { handleInputChange, searchInputDisabled } = props
    const [localInputSearchValue, setLocalInputSearchValue] = useState<string>("")
    const { t } = useTranslation()

    const searchTerm = useSelector(selectSearchTerm)

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalInputSearchValue(e.currentTarget.value)
        handleInputChange(e)
    }

    useEffect(() => {
        setLocalInputSearchValue(searchTerm || "")
    }, [searchTerm])

    return (
        <div className="bg-blue-100 sticky top-0 flex items-center">
            <div className="container mx-auto">
                <div>
                    <label id="SEARCH_LABEL" htmlFor="SEARCH" className="">
                        {t("searchLabel")}
                    </label>
                    <input
                        autoFocus={true}
                        className="px-6 py-3 rounded-md w-full"
                        type="text"
                        id="SEARCH"
                        name="SEARCH"
                        placeholder={t("search")}
                        disabled={searchInputDisabled}
                        value={localInputSearchValue}
                        onChange={handleSearchInputChange}
                    ></input>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
