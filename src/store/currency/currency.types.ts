interface IExchangeRateType {
    buy: number
    sell: number
    middle: number
}

export interface ICurrency {
    currencyCode: string
    currencyName: string
    countryCode: string
    flagFileName: string
    exchangeRate: IExchangeRateType
}

export enum CurrencyActionTypes {
    FETCH_REQUEST = "currency/FETCH_REQUEST",
    FETCH_SUCCESS = "currency/FETCH_SUCCESS",
    FETCH_ERROR = "currency/FETCH_ERROR",
    FILTER_DATA = "currency/FILTER_DATA",
    SEARCH_TERM_CHANGE = "currency/SEARCH_TERM_CHANGE",
}

export interface ICurrencyState {
    readonly loading: boolean
    readonly filtering: boolean
    readonly error?: string
    readonly data: ICurrency[]
    filteredData: ICurrency[]
    searchTerm: string | null
}
