import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import React from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Toaster/>
      <App />
    </StrictMode>
);
