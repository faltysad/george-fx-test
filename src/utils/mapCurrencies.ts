import { CURRENCY_COUNTRY_MAPPING } from "../constants/currencyCountryMapping"
import { ICurrency } from "../types/ICurrency"
import { ICurrencyDTOValidated, ICurrenyDTO } from "../types/ICurrencyDTO"

const isValidCurrencyApiResponseItem = (item: ICurrenyDTO) => {
    if (
        item.currency &&
        item.nameI18N &&
        item.exchangeRate &&
        item.exchangeRate.buy &&
        item.exchangeRate.middle &&
        item.exchangeRate.sell &&
        CURRENCY_COUNTRY_MAPPING[item.currency]
    ) {
        return true
    }

    return false
}

export const mapCurrencies = (currencies: ICurrenyDTO[]): ICurrency[] => {
    const validCurrencies = currencies.filter(
        isValidCurrencyApiResponseItem
    ) as ICurrencyDTOValidated[]

    const mappedcurrencies = validCurrencies.map((currency) => {
        return {
            currencyCode: currency.currency,
            currencyName: currency.nameI18N,
            countryCode: CURRENCY_COUNTRY_MAPPING[currency.currency],
            flagFileName: `${CURRENCY_COUNTRY_MAPPING[
                currency.currency
            ].toLowerCase()}.png`,
            exchangeRate: currency.exchangeRate,
        }
    })

    return mappedcurrencies
}
