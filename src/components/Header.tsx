import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dbe6df] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-background-dark">
            <span className="material-symbols-outlined text-2xl">pets</span>
          </div>
          <Link to="/">
            <h2 className="text-xl font-extrabold tracking-tight">
              Paws &amp; Claws
            </h2>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-sm font-semibold hover:text-primary transition-colors"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold hover:text-primary transition-colors"
            to="/petlist"
          >
            Pet List
          </Link>
          <Link
            className="text-sm font-semibold hover:text-primary transition-colors"
            to="/clientprofile"
          >
            Client Profile
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/authlogin">
            <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-background-dark hover:brightness-110 transition-all">
              Login / Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
