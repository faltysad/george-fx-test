import { render } from "@testing-library/react"
import List from "./List"

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key) => key }),
}))

describe("List", () => {
    it("should render currency list when provided with valid data and no variable flag is set to true", () => {
        const validMockData = [
            {
                currencyCode: "FJD",
                currencyName: "Fiji Dollar",
                countryCode: "FJ",
                flagFileName: "FJ.png",
                exchangeRate: {
                    buy: 2,
                    middle: 2.25,
                    sell: 2.5,
                    indicator: 0,
                    lastModified: "2012-02-14T23:00:00Z",
                },
            },
            {
                currencyCode: "MXN",
                currencyName: "Mexican Peso",
                countryCode: "MX",
                flagFileName: "MX.png",
                exchangeRate: {
                    buy: 22.38,
                    middle: 22.98,
                    sell: 23.58,
                    indicator: 0,
                    lastModified: "2018-11-08T23:00:00Z",
                },
            },
        ]

        const { getByText } = render(
            <List
                currencies={validMockData}
                isLoading={false}
                isError={false}
                isFiltering={false}
            />
        )

        const currencyFiji = getByText("FJD - Fiji Dollar")
        const currencyMexican = getByText("MXN - Mexican Peso")

        expect(currencyFiji).toBeInTheDocument()
        expect(currencyMexican).toBeInTheDocument()
    })

    it("should render `No items found message` when passed empty array and no variable flag is set to true", () => {
        const mockData = []

        const { getByText } = render(
            <List
                currencies={mockData}
                isLoading={false}
                isError={false}
                isFiltering={false}
            />
        )

        const emptyCurrencyArrayResult = getByText("noResult")

        expect(emptyCurrencyArrayResult).toBeInTheDocument()
    })

    it("should render Loading message when isLoading flag is set to true and other flags to false", () => {
        const { getByText } = render(
            <List
                currencies={[]}
                isLoading={true}
                isError={false}
                isFiltering={false}
            />
        )

        const loadingResult = getByText("isLoading")

        expect(loadingResult).toBeInTheDocument()
    })

    it("should render Loading message when isFiltering flag is set to true and other flags to false", () => {
        const { getByText } = render(
            <List
                currencies={[]}
                isLoading={false}
                isError={false}
                isFiltering={true}
            />
        )

        const loadingResult = getByText("isLoading")

        expect(loadingResult).toBeInTheDocument()
    })

    it("should render Error message when isError flag is set to true and other flags to false", () => {
        const { getByText } = render(
            <List
                currencies={[]}
                isLoading={false}
                isError={true}
                isFiltering={false}
            />
        )

        const errorResult = getByText("isError")

        expect(errorResult).toBeInTheDocument()
    })
})
