import { useEffect } from "react"
import { useHistory } from "react-router"
import queryString from "query-string"

export function useSearchInputQueryParamHandler(debouncedSearchTerm: string) {
    const history = useHistory()

    useEffect(() => {
        if (debouncedSearchTerm === "") {
            history.push({})
        } else if (debouncedSearchTerm) {
            history.push({
                search: queryString.stringify({ searchTerm: debouncedSearchTerm }),
            })
        }
    }, [debouncedSearchTerm, history])
}
