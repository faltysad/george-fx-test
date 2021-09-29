import { ICurrency } from "../types/ICurrency"
import { filterCurrencies } from "./filterCurrencies"

describe("filterCurrencies", () => {
    it("should return filtered currency data provided with valid input", () => {
        const validInput = "FJD"
        const mockValidData = [
            {
                currencyCode: "FJD",
                currencyName: "Fiji Dollar",
                countryCode: "FJ",
                flagFileName: "FJ.png",
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
                flagFileName: "MX.png",
                exchangeRate: {
                    buy: 22.38,
                    middle: 22.98,
                    sell: 23.58,
                    indicator: 0,
                    lastModified: "2018-11-08T23:00:00Z",
                },
            },
            {
                currencyCode: "SCR",
                currencyName: "Seychelles-Rupee",
                countryCode: "SC",
                flagFileName: "SC.png",
                exchangeRate: {
                    buy: 14.7246,
                    middle: 15.4746,
                    sell: 16.2246,
                    indicator: 0,
                    lastModified: "2018-11-08T23:00:00Z",
                },
            },
        ]

        const result = filterCurrencies(mockValidData, validInput)

        expect(result).toEqual([
            {
                currencyCode: "FJD",
                currencyName: "Fiji Dollar",
                countryCode: "FJ",
                flagFileName: "FJ.png",
                exchangeRate: {
                    buy: 2,
                    middle: 2.25,
                    sell: 2.5,
                    indicator: 0,
                    lastModified: "2012-02-14T23:00:00Z",
                },
            },
        ])
    })

    it("should return emtpy array provided with input that is not present in the original data array", () => {
        const inputNotIncludedInDataArray = "ThisValueIsNotPresentInsideTheDataArray"

        const mockValidData = [
            {
                currencyCode: "FJD",
                currencyName: "Fiji Dollar",
                countryCode: "FJ",
                flagFileName: "FJ.png",
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
                flagFileName: "MX.png",
                exchangeRate: {
                    buy: 22.38,
                    middle: 22.98,
                    sell: 23.58,
                    indicator: 0,
                    lastModified: "2018-11-08T23:00:00Z",
                },
            },
            {
                currencyCode: "SCR",
                currencyName: "Seychelles-Rupee",
                countryCode: "SC",
                flagFileName: "SC.png",
                exchangeRate: {
                    buy: 14.7246,
                    middle: 15.4746,
                    sell: 16.2246,
                    indicator: 0,
                    lastModified: "2018-11-08T23:00:00Z",
                },
            },
        ]

        const result = filterCurrencies(mockValidData, inputNotIncludedInDataArray)

        expect(result).toEqual([])
    })

    it("should return empty array provided with empty data array", () => {
        const validInput = "CZK"
        const inputData: ICurrency[] = []

        const result = filterCurrencies(inputData, validInput)

        expect(result).toEqual([])
    })
})
