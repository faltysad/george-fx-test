import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import * as redux from "react-redux"
import { Router } from "react-router"
import { useLocationSearchTermParser } from "./useLocationSearchTermParser"

const expectedAction = { payload: "cze", type: "currency/SEARCH_TERM_CHANGE" }

function TestComponent() {
    useLocationSearchTermParser()

    return <div>Example Component</div>
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

it("useLocationSearchTermParser", () => {
    const historyMock = {
        push: jest.fn(),
        location: { search: "searchTerm=cze" },
        listen: jest.fn(),
    }

    //arrange
    const useDispatchSpy = jest.spyOn(redux, "useDispatch")
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)

    act(() => {
        render(
            // @ts-ignore
            <Router history={historyMock}>
                <TestComponent />
            </Router>,
            container
        )
    })

    expect(mockDispatchFn).toBeCalled()
    expect(mockDispatchFn).toHaveBeenCalledWith(expectedAction)
})
