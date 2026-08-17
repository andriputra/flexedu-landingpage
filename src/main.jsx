import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { WaProvider } from "./wa.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WaProvider>
      <App />
    </WaProvider>
  </StrictMode>
);
