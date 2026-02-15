import { useState } from "react";
import { UseUser } from "../contexts/UserContext";
import { Link, NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";

const Header = () => {
  const { user } = UseUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dbe6df] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex gap-x-4 items-center">
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
            <NavLink end to="/home" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/petlist" className={navLinkClass}>
              Pet List
            </NavLink>
            <NavLink to="/clientprofile" className={navLinkClass}>
              Client Profile
            </NavLink>
          </nav>
        )}

        <div className="flex items-center gap-4">
          <div className="flex items-center hidden md:flex">
            <AuthButton />
          </div>

          {user && (
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center px-2 py-1 rounded-lg hover:bg-gray-100"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          )}
        </div>
      </div>

      {user && isMenuOpen && (
        <nav className="md:hidden border-t border-[#dbe6df] bg-white fixed w-full px-6 py-8 flex flex-col gap-6 duration-300">
          <NavLink
            end
            to="/home"
            onClick={() => setIsMenuOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/petlist"
            onClick={() => setIsMenuOpen(false)}
            className={navLinkClass}
          >
            Pet List
          </NavLink>
          <NavLink
            to="/clientprofile"
            onClick={() => setIsMenuOpen(false)}
            className={navLinkClass}
          >
            Client Profile
          </NavLink>
          <AuthButton />
        </nav>
      )}
    </header>
  );
};

export default Header;
