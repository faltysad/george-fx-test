import { IApplicationState } from ".."

const getOwnState = (store: IApplicationState) => store.currency

export const selectIsCurrencyLoading = (store: IApplicationState) =>
    getOwnState(store).loading
export const selectCurrencyError = (store: IApplicationState) =>
    getOwnState(store).error
export const selectCurrencies = (store: IApplicationState) => getOwnState(store).data
export const selectFilteredCurrencies = (store: IApplicationState) =>
    getOwnState(store).filteredData
export const selectSearchTerm = (store: IApplicationState) =>
    getOwnState(store).searchTerm
export const selectIsCurrencyFiltering = (store: IApplicationState) =>
    getOwnState(store).filtering
