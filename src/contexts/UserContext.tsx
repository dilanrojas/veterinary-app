import { createContext, useContext, useState } from "react";
import { type Client } from "../lib/types";

interface UserContextType {
  user: Client | null;
  setUser: React.Dispatch<React.SetStateAction<Client | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<Client | null>(null);

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
