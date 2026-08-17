import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { defaultWaMessage } from "./config";

const WaContext = createContext(null);

export function WaProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(defaultWaMessage);

  const openWa = useCallback((nextMessage) => {
    setMessage(nextMessage || defaultWaMessage);
    setOpen(true);
  }, []);

  const closeWa = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, message, openWa, closeWa }),
    [open, message, openWa, closeWa]
  );

  return <WaContext.Provider value={value}>{children}</WaContext.Provider>;
}

export function useWa() {
  const ctx = useContext(WaContext);
  if (!ctx) {
    throw new Error("useWa harus dipakai di dalam WaProvider");
  }
  return ctx;
}
