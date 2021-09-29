import { mapCurrencies } from "./mapCurrencies"

describe("mapCurrencies", () => {
    it("should map currencies properly when provided with valid input", () => {
        const validMockInput = [
            {
                currency: "FJD",
                precision: 2,
                nameI18N: "Fiji Dollar",
                exchangeRate: {
                    buy: 2,
                    middle: 2.25,
                    sell: 2.5,
                    indicator: 0,
                    lastModified: "2012-02-14T23:00:00Z",
                },
                banknoteRate: {
                    buy: 2.2,
                    middle: 2.4,
                    sell: 2.6,
                    indicator: 0,
                    lastModified: "2018-11-06T23:00:00Z",
                },
                flags: ["provided"],
            },
            {
                currency: "MXN",
                precision: 2,
                nameI18N: "Mexican Peso",
                exchangeRate: {
                    buy: 22.38,
                    middle: 22.98,
                    sell: 23.58,
                    indicator: 0,
                    lastModified: "2018-11-08T23:00:00Z",
                },
                banknoteRate: {
                    buy: 21.1,
                    middle: 22.6,
                    sell: 24.1,
                    indicator: 0,
                    lastModified: "2018-11-06T23:00:00Z",
                },
                flags: ["provided"],
            },
        ]

        const validMockResponse = [
            {
                currencyCode: "FJD",
                currencyName: "Fiji Dollar",
                countryCode: "FJ",
                flagFileName: "fj.png",
                exchangeRate: {
                    buy: 2,
                    middle: 2.25,
                    sell: 2.5,
                    indicator: 0,
                    lastModified: "2012-02-14T23:00:00Z",
                },
            },
            {
                currencyCode: "MXN",
                currencyName: "Mexican Peso",
                countryCode: "MX",
                flagFileName: "mx.png",
                exchangeRate: {
                    buy: 22.38,
                    middle: 22.98,
                    sell: 23.58,
                    indicator: 0,
                    lastModified: "2018-11-08T23:00:00Z",
                },
            },
        ]

        const result = mapCurrencies(validMockInput)

        expect(result).toEqual(validMockResponse)
    })

    it("should return empty array when provided with incomplete input data (where it is unable to perform the mapping)", () => {
        const incompleteMockInput = [
            {
                currency: "FJD",
                nameI18N: "Fiji Dollar",
            },
            {
                currency: "MXN",
                nameI18N: "Mexican Peso",
            },
        ]

        const response = mapCurrencies(incompleteMockInput)

        expect(response).toEqual([])
    })
})
