import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop.js";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>
);
