import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import { Router } from "react-router-dom"
import { useSearchInputQueryParamHandler } from "./useSearchInputQueryParamHandler"

function TestComponent(props: { searchTerm: string }) {
    const { searchTerm } = props

    useSearchInputQueryParamHandler(searchTerm)

    return <div>ahojda</div>
}

let container: any = null

beforeEach(() => {
    // set up a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it("useStaleRefresh hook runs correctly", () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() }

    const spy = jest.spyOn(historyMock, "push")

    act(() => {
        render(
            // @ts-ignore
            <Router history={historyMock}>
                <TestComponent searchTerm="cze" />
            </Router>,
            container
        )
    })

    expect(spy).toBeCalled()
    expect(spy).toBeCalledWith({ search: "searchTerm=cze" })
})
