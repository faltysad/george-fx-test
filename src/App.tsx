import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import configureStore from "./store"

// @ts-ignore
const store = configureStore({})

function App() {
    return (
        <React.StrictMode>
            <React.Suspense fallback="Loading..">
                <Provider store={store}>
                    <Router>
                        <Home />
                    </Router>
                </Provider>
            </React.Suspense>
        </React.StrictMode>
    )
}

export default App
