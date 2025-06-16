import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ← Already using Router here
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
