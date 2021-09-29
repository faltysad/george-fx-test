import { render } from "@testing-library/react"
import ListHead from "./ListHead"

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

describe("ListHead", () => {
    it("should render corresponding labels everytime", () => {
        const { getByText } = render(<ListHead />)

        const currencyLabel = getByText("listHead.currency")
        const countryLabel = getByText("listHead.country")
        const exchangeRateLabel = getByText("listHead.exchangeRate")

        expect(currencyLabel).toBeInTheDocument()
        expect(countryLabel).toBeInTheDocument()
        expect(exchangeRateLabel).toBeInTheDocument()
    })
})
