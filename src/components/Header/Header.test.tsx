import { render } from "@testing-library/react"
import Header from "./Header"

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}))

describe("Header", () => {
    it("Should contain title translation key when rendered", () => {
        const { getByText } = render(<Header />)

        const headerTitle = getByText("title")

        expect(headerTitle).toBeInTheDocument()
    })
})
