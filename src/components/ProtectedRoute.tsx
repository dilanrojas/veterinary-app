import { Navigate, Outlet } from "react-router-dom";
import { UseUser } from "../contexts/UserContext";
export default function ProtectedRoute() {
  const { user } = UseUser();

  if (!user) {
    return <Navigate to="/authlogin" replace />;
  }

  return <Outlet />;
}
