import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MovieProvider } from "./context";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <Provider store={store}>
            <MovieProvider>
                <App />
            </MovieProvider>
        </Provider>
    </Router>
);
