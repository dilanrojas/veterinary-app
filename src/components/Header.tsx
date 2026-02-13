import { UseUser } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";

const Header = () => {
  const { user } = UseUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dbe6df] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className='flex gap-x-4 items-center'>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-background-dark">
              <span className="material-symbols-outlined text-2xl">pets</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">
              Paws &amp; Claws
            </h2>
          </Link>
        </div>

        {user && (
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              end
              to="/home"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${isActive ? "text-primary" : "hover:text-primary"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/petlist"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              Pet List
            </NavLink>

            <NavLink
              end
              to="/clientprofile"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${isActive ? "text-primary" : "hover:text-primary"
                }`
              }
            >
              Client Profile
            </NavLink>
          </nav>
        )}

        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
