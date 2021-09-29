import { render } from "@testing-library/react"
import SearchBar from "./SearchBar"

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

jest.mock("react-redux", () => ({
    useSelector: () => {},
}))

describe("SearchBar", () => {
    it("should render enabled when isSearchInputDisabled attribute is false", () => {
        const { getByLabelText } = render(
            <SearchBar handleInputChange={() => null} searchInputDisabled={false} />
        )

        expect(getByLabelText("searchLabel").closest("input")).toBeEnabled()
    })

    it("should render disbaled when isSearchInputDisabled attribute is true", () => {
        const { getByLabelText } = render(
            <SearchBar handleInputChange={() => null} searchInputDisabled={true} />
        )

        expect(getByLabelText("searchLabel").closest("input")).toBeDisabled()
    })
})
