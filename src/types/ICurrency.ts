type ExchangeRateType = {
    buy: number
    sell: number
    middle: number
}

export interface ICurrency {
    currencyCode: string
    currencyName: string
    countryCode: string
    flagFileName: string
    exchangeRate: ExchangeRateType
}
