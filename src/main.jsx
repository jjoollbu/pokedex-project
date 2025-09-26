import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Global.css";
import App from "./App.jsx";
import { ThemeProvider } from "./hooks/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
