import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import ClientProfile from "./pages/ClientProfile";
import PetList from "./pages/PetList";
import PetProfile from "./pages/PetProfile";
import AuthLogin from "./pages/AuthLogin";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/petlist" element={<PetList />} />
          <Route path="/clientprofile" element={<ClientProfile />} />
          <Route path="/petprofile/:id" element={<PetProfile />} />
          <Route path="/" element={<Welcome />} />
        </Route>

        <Route path="/authlogin" element={<AuthLogin />} />
      </Routes>
    </>
  );
}
