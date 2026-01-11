// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/AuthContext.js";
import { FavouriteContext } from "./context/FavouriteContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <FavouriteContext>
        <App />
        </FavouriteContext>
      </AuthContext>
    </BrowserRouter>
  </StrictMode>
);
