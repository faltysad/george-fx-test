import { ICurrency } from "../types/ICurrency"

export const filterCurrencies = (currencies: ICurrency[], searchValue: string) => {
    return currencies.filter((currency) =>
        Object.values(currency)
            .join(" ")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
    )
}
