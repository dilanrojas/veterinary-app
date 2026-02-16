import { UseUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function AuthButton() {
  const { user, setUser } = UseUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
    setUser(null);
  };

  const handleLogin = () => {
    navigate("/authlogin");
  };

  return user ? (
    <div className="flex items-center gap-4">
      <button
        onClick={handleLogout}
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background-dark hover:brightness-110 transition-all"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <button
        onClick={handleLogin}
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background-dark hover:brightness-110 transition-all"
      >
        Sign In
      </button>
    </div>
  );
}

