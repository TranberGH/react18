import * as React from "react";
// import * as ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

// const mountNode = document.getElementById("app");
// ReactDOM.render(<App />, mountNode);

const container = document.getElementById("app");
if (container !== null) {
    const root = ReactDOMClient.createRoot(container);
    root.render(<App />);
}
