import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background-dark py-12 text-white">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-background-dark">
              <span className="material-symbols-outlined text-lg">pets</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">
              Paws &amp; Claws
            </h2>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              className="text-sm font-medium text-slate-400 hover:text-primary"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium text-slate-400 hover:text-primary"
              to="/petlist"
            >
              Pet List
            </Link>
            <Link
              className="text-sm font-medium text-slate-400 hover:text-primary"
              to="/clientprofile"
            >
              Client Profile
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2024 Paws &amp; Claws Veterinary Clinic. All rights reserved.</p>
          <p>Designed for the best friends in your life.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
