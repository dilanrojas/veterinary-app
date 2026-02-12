import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseUser } from "../contexts/UserContext";
import type { Client } from "../lib/types";
import { getClients } from "../services/clients.service";

const AuthLogin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState<Client[]>();
  const [loading, setLoading] = useState(true);
  const { setUser } = UseUser();
  const navigate = useNavigate();

  useEffect(() => {
    getClients()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(users);

  const handleLogin = (formData: FormData) => {
    const email = formData.get("input-email") as string;
    const password = formData.get("input-password") as string;

    const found = users?.find(
      (user) => user.email === email && user.password === password,
    );

    if (found) {
      setUser(found); // Update Global Context
      navigate("/home"); // Redirect to home
    } else {
      alert("Invalid email or password");
    }
  };

  const handleSignup = (formData: FormData) => {
    const email = formData.get("input-email") as string;
    const password = formData.get("input-password") as string;
    const fullname = formData.get("input-name") as string;
    const phone = formData.get("input-phone") as string;
    const username = formData.get("input-username") as string;

    const lastId =
      users && users.length > 0 ? Math.max(...users.map((u) => u.id)) : 0;

    const newUser: Client = {
      id: lastId + 1,
      fullname,
      username,
      password,
      email,
      phone,
      nextAppointment: "None",
      pets: [],
    };

    setUser(newUser);
    navigate("/home");
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1440px] mx-auto overflow-hidden">
      <div className="hidden md:flex flex-1 relative flex-col items-center justify-center p-12 overflow-hidden bg-background-light dark:bg-slate-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60"></div>
        <div className="relative z-10 text-center max-w-md">
          <div className="mb-10 flex justify-center">
            <div
              className="w-full max-w-[400px] h-[400px] bg-center bg-no-repeat bg-contain rounded-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvMkL49O3HQEKPY_707uaT15hjFID_iY7XSlIhJaKN7Q-xMcqHi1bXzP1cf4munj3rPj9RR1IPAiDMFR-xWA9IXjrq6ok6IWjO5c6UEVmoPRpFE1YEA_B61RkeH-cshw2sA90lTcuWf_PZh7nwsT0CMMe_HQhS-Y9_G4Kvs_P_sZ1y-t21E6tBftVjGZ6ETU23QnvYgoVMBEeZ9wBBGJXfHtTgT1hlxQPtO61GGPVA1QuEjQmwJuXSeABaHcD_cZjBlieTFfdchJQ")',
              }}
              role="img"
              aria-label="Friendly veterinarian smiling and hugging a golden retriever dog"
            ></div>
          </div>
          <h1 className="text-[#111813] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
            The best care for your pets.
          </h1>
          <p className="text-[#111813]/70 dark:text-white/70 text-base font-normal leading-normal">
            Join our community of over 10,000 pet owners who trust VetCare for
            their medical records and appointment scheduling.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white dark:bg-background-dark">
        <div className="w-full max-w-[480px] flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="text-[#111813] dark:text-white tracking-light text-[32px] font-bold leading-tight">
              Welcome Back
            </h2>
            <p className="text-[#111813]/60 dark:text-white/60 text-base font-normal leading-normal">
              Enter your details to manage your pet's health records.
            </p>
          </div>

          <div className="flex h-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
            <button
              className={`flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-bold leading-normal transition-all ${
                !isSignup
                  ? "bg-white dark:bg-slate-700 shadow-sm text-[#111813] dark:text-white"
                  : "text-slate-500 dark:text-slate-400 hover:text-[#111813] dark:hover:text-white"
              }`}
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>
            <button
              className={`flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-medium leading-normal transition-all ${
                isSignup
                  ? "bg-white dark:bg-slate-700 shadow-sm text-[#111813] dark:text-white"
                  : "text-slate-500 dark:text-slate-400 hover:text-[#111813] dark:hover:text-white"
              }`}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </button>
          </div>

          <form
            className="flex flex-col gap-4"
            action={isSignup ? handleSignup : handleLogin}
          >
            {isSignup && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-[#111813] dark:text-white">
                    Full Name
                  </label>
                  <input
                    className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                    placeholder="John Doe"
                    type="text"
                    name="input-name"
                    id="input-name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-[#111813] dark:text-white">
                    Username
                  </label>
                  <input
                    className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                    placeholder="jonhdoe"
                    type="text"
                    name="input-username"
                    id="input-username"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-[#111813] dark:text-white">
                    Phone Number
                  </label>
                  <input
                    className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                    placeholder="+506 0000-0000"
                    type="tel"
                    name="input-phone"
                    id="input-phone"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-[#111813] dark:text-white">
                Email Address
              </label>
              <input
                className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="email@example.com"
                type="email"
                name="input-email"
                id="input-email"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#111813] dark:text-white">
                  Password
                </label>
                {!isSignup && (
                  <Link
                    className="text-xs font-semibold text-primary hover:underline"
                    to="/forgot-password"
                  >
                    Forgot?
                  </Link>
                )}
              </div>
              <div className="relative">
                <input
                  className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all pr-10 px-4"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  id="input-password"
                  name="input-password"
                />
                <span
                  className="flex items-center h-full material-symbols-outlined absolute right-3 -translate-y-1/2 text-slate-400 cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </div>
            </div>

            <button
              className="flex w-full items-center justify-center rounded-xl h-12 px-5 bg-primary text-[#111813] text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 shadow-lg shadow-primary/20 transition-all mt-4"
              type="submit"
            >
              {isSignup ? "Create Account" : "Login to Account"}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            By continuing, you agree to our{" "}
            <Link
              className="text-primary hover:underline font-medium"
              to="/terms"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="text-primary hover:underline font-medium"
              to="/privacy"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
