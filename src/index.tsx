import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Portfolio from "./pages/Portfolio/Portfolio";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
