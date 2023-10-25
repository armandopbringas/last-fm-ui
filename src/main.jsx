import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/Router";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
