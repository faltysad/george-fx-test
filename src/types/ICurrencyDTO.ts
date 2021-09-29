type ExchangeRateType = {
    buy: number
    middle: number
    sell: number
}

export interface ICurrenyDTO {
    currency?: string
    precision?: number
    nameI18N?: string
    exchangeRate?: ExchangeRateType
    banknoteRate?: ExchangeRateType
    flags?: string[]
}

export interface ICurrencyDTOValidated {
    currency: string
    nameI18N: string
    exchangeRate: ExchangeRateType
}

export interface ICurrencyApiDTO {
    institute: number
    lastUpdated: string
    comparisonDate: string
    baseCurrency: string
    fx: ICurrenyDTO[]
}
