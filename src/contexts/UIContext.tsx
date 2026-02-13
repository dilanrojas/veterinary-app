import { createContext, useContext, useState } from "react";

interface UIContextType {
  adding: boolean;
  setAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export default function UIProvider({ children }: { children: React.ReactNode }) {
  const [adding, setAdding] = useState<boolean>(false);

  return (
    <UIContext.Provider value={{ adding, setAdding }}>
      {children}
    </UIContext.Provider>
  )
}

export function UseUI() {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used within UserProvider");
  return context;
}
