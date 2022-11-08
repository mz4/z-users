import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./app/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
