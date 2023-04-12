import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

const   rootElement = document.getElementById("root"),
        root = ReactDOM.createRoot(rootElement);

root.render (
        <BrowserRouter>
                <App />
        </BrowserRouter>
)