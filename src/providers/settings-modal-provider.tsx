import { type PropsWithChildren, useMemo, useState } from "react";
import { SettingsModal } from "@/features/user-settings";
import { SettingsModalContext } from "@/features/user-settings/model/settings-modal-context";

export const SettingsModalProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }),
    [],
  );

  return (
    <SettingsModalContext.Provider value={value}>
      {children}

      <SettingsModal open={open} />
    </SettingsModalContext.Provider>
  );
};
