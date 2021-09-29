import puppeteer from "puppeteer"

jest.setTimeout(10000)

describe("App.js", () => {
    let browser: any
    let page: any

    beforeAll(async () => {
        browser = await puppeteer.launch()
        page = await browser.newPage()
    })

    it("should contain the header text", async () => {
        await page.goto("http://localhost:3000")

        const text = await page.$eval("#HEADER", (e: any) => e.textContent)
        expect(text).toContain("George FX test")
    })

    it("should render loading after changing search input value", async () => {
        await page.goto("http://localhost:3000")

        await page.waitForSelector("#SEARCH")

        await page.type("#SEARCH", "EUR")

        await page.waitForSelector("#IS_LOADING")
        const listText = await page.$eval("#LIST", (e: any) => e.textContent)
        expect(listText).toContain("Loading")
    })

    it("should output correct currencies for `CZK` search input value", async () => {
        await page.goto("http://localhost:3000")

        await page.waitForSelector("#SEARCH")

        await page.click("#SEARCH_LABEL")
        const searchInput = await page.evaluateHandle(() => document.activeElement)
        await searchInput.type("CZK")

        await page.waitForSelector("#LIST_ITEM")

        const listText = await page.$eval("#LIST", (e: any) => e.textContent)
        expect(listText).toContain("CZK")
    })

    it("outputs correct currencies when accessing page through valid deeplink (searchTerm=GBP)", async () => {
        await page.goto("http://localhost:3000/?searchTerm=GBP")

        await page.waitForSelector("#LIST_ITEM")

        const listText = await page.$eval("#LIST", (e: any) => e.textContent)
        expect(listText).toContain("GBP")
    })

    it("should handle UTF-8 encoded searchTerm deeplink correctly", async () => {
        await page.goto("http://localhost:3000/?searchTerm=%26")

        await page.waitForSelector("#SEARCH")

        const searchInputValue = await page.$eval("#SEARCH", (input: any) => {
            return input.getAttribute("value")
        })

        expect(searchInputValue).toBe("&")

        await page.waitForSelector("#NO_RESULT")
        const listText = await page.$eval("#LIST", (e: any) => e.textContent)
        expect(listText).toContain("No results found")
    })

    it("should handle browser history back&forth travel correctly (clicking back and forward 'arrows' in the browser should preserve the searchTerm state)", async () => {
        // 1. access deeplink directly and validate output
        await page.goto("http://localhost:3000/?searchTerm=CZK")
        await page.waitForSelector("#LIST_ITEM")
        const czk = await page.$eval("#LIST", (e: any) => e.textContent)
        expect(czk).toContain("CZK")

        // 2. input valid value into searchInput and validate output
    })

    afterAll(() => browser.close())
})
