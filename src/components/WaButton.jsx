import { useWa } from "../wa";

export default function WaButton({ message, className, children }) {
  const { openWa } = useWa();

  return (
    <button type="button" className={className} onClick={() => openWa(message)}>
      {children}
    </button>
  );
}
