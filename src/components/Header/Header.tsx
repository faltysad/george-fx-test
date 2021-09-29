import { useTranslation } from "react-i18next"

const Header = () => {
    const { t } = useTranslation()

    return (
        <div
            id="HEADER"
            className="flex justify-center items-center shadow-md bg-blue-300 text-blue-900"
        >
            <h1 className="text-xl font-bold">{t("title")}</h1>
        </div>
    )
}

export default Header
