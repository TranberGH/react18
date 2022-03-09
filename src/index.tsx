import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import * as ReactDOM from "react-dom";

import App from './app';

// const mountNode = document.getElementById("app");
// ReactDOM.render(<App />, mountNode);

const container = document.getElementById('app');
if (container !== null) {
  const root = ReactDOMClient.createRoot(container);
  root.render(<App />);
}
