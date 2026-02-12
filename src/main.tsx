import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
);
