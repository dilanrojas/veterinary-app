import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import ClientProfile from "./pages/ClientProfile";
import PetList from "./pages/PetList";
import PetDetails from "./pages/PetDetails";
import AuthLogin from "./pages/AuthLogin";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/petlist" element={<PetList />} />
            <Route path="/clientprofile" element={<ClientProfile />} />
            <Route path="/petlist/:id" element={<PetDetails />} />
          </Route>

          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/authlogin" element={<AuthLogin />} />
      </Routes>
    </>
  );
}
