import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
