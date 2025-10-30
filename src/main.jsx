import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Page from "./App.jsx";   // ← App → Page

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />                    // ← <App /> → <Page />
  </React.StrictMode>
);
