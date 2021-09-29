import React from "react"
import { useTranslation } from "react-i18next"
import { ICurrency } from "../../types/ICurrency"
import ListHead from "../ListHead/ListHead"
import ListItem from "../ListItem/ListItem"

export type ListProps = {
    currencies: ICurrency[]
    isLoading: boolean
    isFiltering: boolean
    isError: boolean
}

const ListWrapper = (props: React.PropsWithChildren<{}>) => {
    const { children } = props

    return (
        <div id="LIST" className="container mx-auto">
            <ListHead />
            {children}
        </div>
    )
}

const List = (props: ListProps) => {
    const { currencies, isLoading, isFiltering, isError } = props
    const { t } = useTranslation()

    if (isError) {
        return (
            <ListWrapper>
                <h1 id="IS_ERROR">{t("isError")}</h1>
            </ListWrapper>
        )
    }

    if (isLoading || isFiltering) {
        return (
            <ListWrapper>
                <h1 id="IS_LOADING">{t("isLoading")}</h1>
            </ListWrapper>
        )
    }

    if (!currencies.length) {
        return (
            <ListWrapper>
                <h1 id="NO_RESULT">{t("noResult")}</h1>
            </ListWrapper>
        )
    }

    return (
        <ListWrapper>
            {currencies.map((currency, index) => (
                <ListItem
                    key={`${currency.countryCode}-${index}`}
                    currencyItem={currency}
                />
            ))}
        </ListWrapper>
    )
}

export default List
