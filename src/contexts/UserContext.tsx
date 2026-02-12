import { createContext, useContext, useState, useEffect } from "react";
import { type Client } from "../lib/types";

interface UserContextType {
  user: Client | null;
  setUser: React.Dispatch<React.SetStateAction<Client | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY = "vetcare_user_session";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<Client | null>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem(STORAGE_KEY);
      return savedUser ? JSON.parse(savedUser) : null;
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function UseUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
}
