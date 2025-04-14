import { createContext, useState } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return <SidebarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>{children}</SidebarContext.Provider>;
}

export { SidebarProvider, SidebarContext };
