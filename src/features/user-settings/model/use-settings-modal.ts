import { useContext } from "react";
import { SettingsModalContext } from "@/features/user-settings/model/settings-modal-context";

export const useSettingsModal = () => {
  const context = useContext(SettingsModalContext);
  if (!context) {
    throw new Error(
      "useSettingsModal must be used within SettingsModalProvider",
    );
  }
  return context;
};
