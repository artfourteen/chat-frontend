import { createContext, useContext } from "react";

export interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within <Dropdown>");
  }
  return context;
};
