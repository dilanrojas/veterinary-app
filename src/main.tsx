import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import UIProvider from "./contexts/UIContext";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <UIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UIProvider>
  </UserProvider>
);
