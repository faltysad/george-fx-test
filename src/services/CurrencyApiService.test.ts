import CurrencyApiService, { axiosInstance } from "./CurrencyApiService"

describe("CurrencyApiService", () => {
    it("shoul call axios.get on CurrencyApiService axios instance", async () => {
        jest.spyOn(axiosInstance, "get").mockImplementation(async () => [])
        const response = await CurrencyApiService.getCurrencies()

        expect(response).toEqual([])
    })

    it("should call correct endpoint using axios.get on CurrencyApiService axios instance", async () => {
        const currencyApiServiceAxiosInstanceSpy = jest
            .spyOn(axiosInstance, "get")
            .mockImplementation(async () => [])

        await CurrencyApiService.getCurrencies()
        expect(currencyApiServiceAxiosInstanceSpy).toBeCalled()
        expect(currencyApiServiceAxiosInstanceSpy).toBeCalledWith("/")
    })

    it("the CurrencyApiService axios instance should have correct base url", async () => {
        expect(axiosInstance.defaults.baseURL).toEqual(
            "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343"
        )
    })
})
