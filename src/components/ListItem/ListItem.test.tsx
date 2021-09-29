import { render } from "@testing-library/react"
import ListItem from "./ListItem"

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

describe("ListItem", () => {
    it("should display correct representation of data given valid props", async () => {
        const validMockData = {
            currencyCode: "CZK",
            currencyName: "Czech Koruna",
            countryCode: "CZ",
            flagFileName: "CZ.png",
            exchangeRate: {
                buy: 25.575,
                middle: 25.925,
                sell: 26.275,
                indicator: 0,
                lastModified: "2018-11-08T23:00:00Z",
            },
        }

        const { getByText, getByAltText } = render(
            <ListItem currencyItem={validMockData} />
        )

        const CZKListItem = getByText("CZK - Czech Koruna")
        const flagIcon = getByAltText("CZ flag")

        expect(CZKListItem).toBeInTheDocument()
        expect(flagIcon).toBeInTheDocument()
    })
})
