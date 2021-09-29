import axios from "axios"
import { ICurrencyApiDTO } from "../types/ICurrencyDTO"

const CURRENCY_API_ENDPOINT =
    "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343"

export const axiosInstance = axios.create({
    baseURL: CURRENCY_API_ENDPOINT,
})

class CurrencyApiService {
    async getCurrencies() {
        return axiosInstance.get<ICurrencyApiDTO>("/")
    }
}

export default new CurrencyApiService()
