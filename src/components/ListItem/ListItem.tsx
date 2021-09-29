import { useTranslation } from "react-i18next"
import { ICurrency } from "../../types/ICurrency"

interface IListItemProps {
    currencyItem: ICurrency
}

const ListItem = (props: IListItemProps) => {
    const { currencyItem } = props
    const { t } = useTranslation()
    const formattedCurrency = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(currencyItem.exchangeRate.sell)

    return (
        <div
            id="LIST_ITEM"
            className="grid grid-cols-table border-0 border-b border-solid items-center"
        >
            <div className="grid grid-cols-flagWrapper items-center">
                <div className="p-8 pl-0 py-2">
                    <img
                        id="FLAG_ICON"
                        src={`./flags/${currencyItem.flagFileName}`}
                        alt={`${currencyItem.countryCode} flag`}
                        width={70}
                        height={47}
                    ></img>
                </div>
                <div className="ml-1">
                    {currencyItem.currencyCode} - {currencyItem.currencyName}
                </div>
            </div>
            <div>{t(`countries.${currencyItem.countryCode}`)}</div>
            <div>{formattedCurrency}</div>
        </div>
    )
}

export default ListItem
