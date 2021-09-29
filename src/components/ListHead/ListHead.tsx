import { useTranslation } from "react-i18next"

interface IListHeadProps {}

const ListHead = (props: IListHeadProps) => {
    const { t } = useTranslation()

    return (
        <div className="grid grid grid-cols-tableSmall md:grid-cols-table border-0 border-b border-solid items-center py-2 font-bold">
            <div className="listItemFlagWrapper">{t("listHead.currency")}</div>
            <div>{t("listHead.country")}</div>
            <div>{t("listHead.exchangeRate")}</div>
        </div>
    )
}

export default ListHead
